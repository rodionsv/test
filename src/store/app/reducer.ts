import { HIDE_LOADER, SHOW_LOADER } from './types';
import { AppActionTypes } from './actions';

const initialState = {
    loading: false,
};

export const appReducer = (state = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        default:
            return state;
    }
};
