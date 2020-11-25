import {
    ADD_IMAGE,
    FETCH_IMAGE,
    REMOVE_IMAGE,
    REMOVE_LAST_IMAGE,
    SET_IMAGES,
    SET_LAST_IMAGE,
    UPDATE_IMAGE,
} from './types';
import { HistoryActionTypes } from './actions';
import { Image } from '../../shared/interfaces/image';

export interface HistoryState {
    images: Image[];
    fetchedImages: Array<unknown>;
    currentImage?: Image;
}

const initialState: HistoryState = {
    images: [],
    fetchedImages: [],
};

export const historyReducer = (state = initialState, action: HistoryActionTypes): HistoryState => {
    switch (action.type) {
        case SET_IMAGES:
            return <HistoryState>{ ...state, images: action.payload };
        case FETCH_IMAGE:
            return <HistoryState>{ ...state, fetchedImages: [...state.fetchedImages, action.payload] };
        case ADD_IMAGE:
            return <HistoryState>{ ...state, images: [...state.images, action.payload] };
        case SET_LAST_IMAGE:
            return <HistoryState>{ ...state, currentImage: action.payload };
        case UPDATE_IMAGE:
            return <HistoryState>{
                ...state,
                images: state.images.map((image: Image) =>
                    image.id === (action.payload as Image).id
                        ? { ...image, src: (action.payload as Image).src }
                        : image,
                ),
            };
        case REMOVE_LAST_IMAGE:
            return { ...state, currentImage: undefined };
        case REMOVE_IMAGE:
            return {
                ...state,
                images: state.images.filter((item: Image) => item.id !== action.payload),
            };
        default:
            return state;
    }
};
