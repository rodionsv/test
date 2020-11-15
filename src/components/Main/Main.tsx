import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage, removeCurrentImage } from '../store/history/actions';
import { Image } from '../shared/interfaces/image';
import { RootState } from '../store/root-reducer';
import { Loader } from '../styles/styled-components/Loader';

const Main: FC = () => {
    const dispatch = useDispatch();
    const { loading }: { loading: boolean } = useSelector((state: RootState) => state.app);
    const { currentImage }: { currentImage: Image } = useSelector((state: RootState) => state.history);

    const [image, setImage] = useState<Image>();

    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        return () => {
            dispatch(removeCurrentImage());
        };
    }, []);

    useEffect(() => {
        setImage(currentImage);
    }, [currentImage]);

    const renderImage = useMemo(
        () =>
            !!image && image.src ? (
                <img ref={imgRef} src={image.src} alt="Картинка" />
            ) : (
                <p>Картинка ещё не загружена</p>
            ),
        [image],
    );

    const clickHandler = useCallback(() => {
        dispatch(fetchImage());
    }, []);

    return (
        <div>
            {renderImage}
            <Loader />
            <button type="button" onClick={clickHandler}>
                Загрузить
            </button>
        </div>
    );
};

export default Main;
