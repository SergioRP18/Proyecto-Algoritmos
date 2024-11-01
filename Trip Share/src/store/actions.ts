import { Screens } from "../types/navigation";
import { ScreenActions } from "../types/store";

export const navigate = (screen: Screens) => {
    return{
        action: ScreenActions.NAVIGATE,
        payload: screen,
    };
};

export const setUserCredentials = (user: string) => {
    return {
        action: ScreenActions.SET_USER_CREDENTIALS,
        payload: user,
    };
};