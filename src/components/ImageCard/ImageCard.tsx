import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeImage, updateImage } from '../../store/history/actions';
import { monthNames } from '../../constants/month-names';
import { convertMonth } from '../../shared/helpers/date-functions';
import { HistoryCard } from '../../styled-components/HistoryCard';
import { DeleteButton } from '../../styled-components/DeleteButton';
import { Skeleton } from '../../styled-components/Skeleton';
import { Image } from '../../shared/interfaces/image';
import { RootState } from '../../store/root-reducer';

interface Props {
    name: string;
    url: string;
    id: string | number;
    imageSrc?: string | undefined;
    date: Date | string;
}

export const ImageCard: FC<Props> = ({ name, url, id, date, imageSrc }): JSX.Element => {
    const dispatch = useDispatch();
    const currentImage = useSelector((state: RootState) =>
        state.history.images.find((image: Image) => image.id === id),
    );

    const imgRef = useRef<HTMLImageElement>(null);

    const [isLoading, setLoading] = useState<boolean>(true);
    // for perform a React state update on an unmounted component
    const [isCancelled, setCancelled] = useState<boolean>(false);
    // to abort our requests when leave page
    const [abortController] = useState(new window.AbortController());
    const [day] = useState<number>(date instanceof Date ? date.getDate() : new Date(date).getDate());
    const [month, setMonth] = useState<string>(
        date instanceof Date ? monthNames[date.getMonth()] : monthNames[new Date(date).getMonth()],
    );
    const [year] = useState<number>(date instanceof Date ? date.getFullYear() : new Date(date).getFullYear());
    const [src, setSrc] = useState<string>(imageSrc ?? '');

    useEffect(() => {
        setMonth(convertMonth(month));
        return (): void => {
            abortController.abort();
            setCancelled(true);
        };
    }, []);

    useEffect(() => {
        if (imageSrc) {
            setLoading(false);
            return;
        }
        const createImage = (data: Blob) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setSrc(reader.result);
                    setLoading(false);
                }
            };
            reader.readAsDataURL(data);
        };
        if (!isCancelled || !src || src === imageSrc) {
            const { signal } = abortController;

            const fetchImage = async (test: string) => {
                const response = await fetch(test, { signal });
                createImage(await response.blob());
            };

            fetchImage(url);
        }
    }, [url]);

    useEffect(() => {
        if (!src || src === imageSrc) return;
        dispatch(updateImage({ ...(currentImage as Image), src }));
    }, [src]);

    const buttonHandler = () => {
        dispatch(removeImage(id));
    };

    const renderImage = useMemo((): JSX.Element => {
        return !isLoading && (src || imageSrc) ? (
            <img width="200" height="150" ref={imgRef} src={imageSrc ?? src} alt="test" />
        ) : (
            <Skeleton className="skeleton" style={{ width: '200px', height: '150px' }} />
        );
    }, [isLoading, src, imageSrc]);

    return (
        <HistoryCard>
            {renderImage}
            <div style={{ display: 'grid', padding: '32px 0' }}>
                <h3>{name || 'No title'}</h3>
                <time>{`${day} ${month} ${year}`}</time>
                <DeleteButton onClick={buttonHandler} type="button">
                    Удалить
                </DeleteButton>
            </div>
        </HistoryCard>
    );
};
