import { HIDE_LOADER, SHOW_LOADER } from './types';
import { AppActionTypes } from './actions';

export interface AppState {
    loading: boolean;
}

const initialState = {
    loading: false,
};

export const reducer = (state = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        default:
            return state;
    }
};
