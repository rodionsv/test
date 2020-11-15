import { HIDE_LOADER, SHOW_LOADER } from "./types";

export const showLoader = () => {
    return {
        type: SHOW_LOADER,
    };
};

export const dismissLoader = () => {
    return {
        type: HIDE_LOADER,
    };
};
