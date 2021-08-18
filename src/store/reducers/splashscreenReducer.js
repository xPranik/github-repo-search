import {splashscreenActionType} from "../../utils/consts";

const initState = {
    isShown: false
}

export const splashscreenReducer = (state = initState, action) => {
    switch (action.type) {
        case splashscreenActionType.SET_SPLASHSCREEN_SHOWN:
            return { isShown: true };
        default:
            return state;
    }
}