import React, { FC, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ImageCard } from '../ImageCard/ImageCard';
import { Image } from '../../shared/interfaces/image';
import { BackButton } from '../../styles/styled-components/BackButton';
import { MAX_HISTORY_COUNT } from '../../constants/const';
import { RootState } from '../../store/root-reducer';
import { Card } from '../../styles/styled-components/Card';
import { ShowMoreButton } from '../../styles/styled-components/ShowMoreButton';
import StorageWorker from '../../shared/helpers/storage-worker';
import { StorageNames } from '../../constants/storages';

const History: FC = () => {
    const { images }: { images: Image[] } = useSelector((state: RootState) => state.history);

    const [isShowAll, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            StorageWorker.set(StorageNames.LOCAL_STORAGE, 'history', 'images', images);
        };
    }, []);

    const listItems = useMemo(() => {
        if (isShowAll) {
            return images.map((img: Image, idx: number) => (
                // for totally unique
                // eslint-disable-next-line react/no-array-index-key
                <li key={`${img.id}${idx}`}>
                    <ImageCard name={img.name} url={img.url} id={img.id} date={img.date} />
                </li>
            ));
        }
        return images.slice(-MAX_HISTORY_COUNT).map((img: Image) => (
            <li key={img.id}>
                <ImageCard name={img.name} url={img.url} id={img.id} date={img.date} />
            </li>
        ));
    }, [images, isShowAll]);

    return (
        <Card style={{ padding: '14px 65px 25px' }}>
            <BackButton to={{ pathname: '/' }}>История</BackButton>
            {!!images && !!images.length && <ul>{listItems}</ul>}
            {!images.length && (
                <p style={{ margin: '16px auto', fontSize: '24px', textAlign: 'center' }}>История пока пуста</p>
            )}
            {!!images && images.length > 5 && !isShowAll && (
                <ShowMoreButton onClick={() => setShowAll(true)} type="button">
                    Показать еще
                </ShowMoreButton>
            )}
        </Card>
    );
};

export default History;
