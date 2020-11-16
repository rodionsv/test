import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage, removeCurrentImage } from '../../store/history/actions';
import { Image } from '../../shared/interfaces/image';
import { RootState } from '../../store/root-reducer';
import { Loader } from '../../styles/styled-components/Loader';
import { Card } from '../../styles/styled-components/Card';
import { UploadButton } from '../../styles/styled-components/UploadButton';

const Main: FC = () => {
    const dispatch = useDispatch();
    const currentImage = useSelector((state: RootState) => state.history.currentImage);

    // to abort our requests when leave page
    const [abortController] = useState(new window.AbortController());
    // to control our xhr response
    const [xhr] = useState(new XMLHttpRequest());
    const [loading, setLoading] = useState<boolean>(false);
    const [image] = useState<Image>();
    const [src, setSrc] = useState<string>();

    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        return () => {
            dispatch(removeCurrentImage());
            abortController.abort();
            xhr.abort();
        };
    }, []);

    useEffect(() => {
        if (!currentImage) return;
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

        xhr.open('GET', currentImage.url, true);
        xhr.responseType = 'blob';
        // function instead of arrow function for this
        // eslint-disable-next-line func-names
        xhr.addEventListener('load', function () {
            createImage(this.response);
        });
        xhr.send();
    }, [currentImage]);

    const renderImage = useMemo(
        () =>
            !!currentImage && src ? (
                <img style={{ margin: 'auto' }} ref={imgRef} src={src} alt="Картинка" />
            ) : (
                <p
                    style={{
                        margin: 0,
                        fontSize: '23px',
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        fontWeight: '500',
                        lineHeight: '430px',
                        textAlign: 'center',
                    }}
                >
                    Картинка ещё не загружена
                </p>
            ),
        [image, src],
    );

    const clickHandler = useCallback(() => {
        setLoading(true);
        dispatch(fetchImage());
    }, []);

    return (
        <Card style={{ padding: '80px' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '600px',
                    height: '430px',
                    margin: 'auto',
                    border: '1px solid #b8b8b8',
                }}
            >
                {loading && <Loader />}
                {!loading && renderImage}
            </div>
            <UploadButton type="button" onClick={clickHandler} disabled={loading}>
                Загрузить
            </UploadButton>
        </Card>
    );
};

export default Main;
