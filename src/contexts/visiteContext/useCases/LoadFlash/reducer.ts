import { LoadFlashState } from '../../configuration/state';
import { LOAD_FLASH, LOAD_FLASH_FAILED, LOAD_FLASH_SUCCESS, LoadFlashActionDbTypes } from './actionTypes';

const initialState: LoadFlashState = {
    loading: false,
    error: undefined,
    flash: undefined,
};

export const reducerLoadFlash= (
    state = initialState,
    action: LoadFlashActionDbTypes,
): LoadFlashState => {
    switch (action.type) {
        case LOAD_FLASH:
            return { loading: true, error: undefined, flash: undefined };

        case LOAD_FLASH_SUCCESS:
            return { loading: false, error: undefined, flash: action.payload };

        case LOAD_FLASH_FAILED:
            return { loading: false, error: action.payload, flash: undefined };

        default:
            return state;
    }
};
