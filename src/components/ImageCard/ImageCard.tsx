import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeImage } from '../../store/history/actions';
import { monthNames } from '../../constants/month-names';
import { convertMonth } from '../../shared/helpers/date-functions';
import { HistoryCard } from '../../styles/styled-components/HistoryCard';
import { DeleteButton } from '../../styles/styled-components/DeleteButton';
import { Skeleton } from '../../styles/styled-components/Skeleton';

interface Props {
    name: string;
    url: string;
    id: string | number;
    date: Date | string;
}

export const ImageCard: FC<Props> = ({ name, url, id, date }) => {
    const dispatch = useDispatch();

    const imgRef = useRef<HTMLImageElement>(null);

    const [isLoading, setLoading] = useState<boolean>(true);
    const [day] = useState<number>(date instanceof Date ? date.getDate() : new Date(date).getDate());
    const [month, setMonth] = useState<string>(
        date instanceof Date ? monthNames[date.getMonth()] : monthNames[new Date(date).getMonth()],
    );
    const [year] = useState<number>(date instanceof Date ? date.getFullYear() : new Date(date).getFullYear());
    const [src, setSrc] = useState<string>('');

    useEffect(() => {
        setMonth(convertMonth(month));
    }, []);

    useEffect(() => {
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

        const fetchImage = async (test: string) => {
            const response = await fetch(test);
            createImage(await response.blob());
        };

        fetchImage(url);
    }, [url]);

    const buttonHandler = () => {
        dispatch(removeImage(id));
    };

    const renderImage = useMemo(
        () =>
            !isLoading && src ? (
                <img width="200" height="150" ref={imgRef} src={src} alt="test" />
            ) : (
                <Skeleton className="skeleton" style={{ width: '200px', height: '150px' }} />
            ),
        [isLoading, src],
    );

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
