import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage, removeCurrentImage } from '../../store/history/actions';
import { Image } from '../../shared/interfaces/image';
import { RootState } from '../../store/root-reducer';
import { Loader } from '../../styled-components/Loader';
import { Card } from '../../styled-components/Card';
import { UploadButton } from '../../styled-components/UploadButton';

const Main: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const currentImage = useSelector((state: RootState) => state.history.currentImage);

    // to control our xhr response
    const [xhr] = useState(new XMLHttpRequest());
    const [loading, setLoading] = useState<boolean>(false);
    const [image] = useState<Image>();
    const [src, setSrc] = useState<string>();

    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        return (): void => {
            dispatch(removeCurrentImage());
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
                        fontWeight: 500,
                        lineHeight: '430px',
                        textAlign: 'center',
                    }}
                >
                    Картинка ещё не загружена
                </p>
            ),
        [image, src],
    );

    const clickHandler = useCallback((): void => {
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
