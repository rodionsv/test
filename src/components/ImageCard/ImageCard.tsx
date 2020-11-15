import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeImage } from '../../../store/history/actions';
import { monthNames } from '../../../constants/month-names';

interface Props {
    name: string;
    src: string;
    id: string | number;
    date: Date;
}

export const ImageCard: FC<Props> = ({ name, src, id, date }) => {
    const dispatch = useDispatch();

    const imgRef = useRef<HTMLImageElement>(null);

    const [day] = useState<number>(date.getDate());
    const [month, setMonth] = useState<string>(monthNames[date.getMonth()]);
    const [year] = useState<number>(date.getFullYear());

    const convertMonth = useCallback(() => {
        if (month[month.length - 1] === 'ь') {
            const monthAsArray = month.split('');
            monthAsArray.splice(monthAsArray.length - 1, 1, 'я');
            setMonth(monthAsArray.join(''));
        } else {
            setMonth(`${month}а`);
        }
    }, [month]);

    useEffect(() => {
        convertMonth();
    }, []);

    const buttonHandler = () => {
        dispatch(removeImage(id));
    };

    return (
        <article>
            <img width="265" height="140" ref={imgRef} src={src} alt="test" />
            <div>
                <h3>{name || 'No title'}</h3>
                <time>{`${day} ${month} ${year}`}</time>
                <button onClick={buttonHandler} type="button">
                    Удалить
                </button>
            </div>
        </article>
    );
};
