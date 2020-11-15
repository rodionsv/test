import { HIDE_LOADER, SHOW_LOADER } from './types';
import { NewAction } from '../../shared/interfaces/new-action';

export const showLoader = (): NewAction<void> => {
    return {
        type: SHOW_LOADER,
    };
};

export const dismissLoader = (): NewAction<void> => {
    return {
        type: HIDE_LOADER,
    };
};

export type AppActionTypes = ReturnType<typeof showLoader> | ReturnType<typeof dismissLoader>;
