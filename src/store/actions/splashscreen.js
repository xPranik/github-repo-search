import {splashscreenActionType} from "../../utils/consts";

export const showSplashscreen = () => {
    return async (dispatch) => {
        dispatch({ type: splashscreenActionType.SET_SPLASHSCREEN_SHOWN });
    };
};