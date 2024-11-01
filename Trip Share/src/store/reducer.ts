import { ScreenActions } from "../types/store";

export const reducer = (currentAction: any, currentState: any) => {
    const { action, payload } = currentAction;

    switch(action){
        case ScreenActions.NAVIGATE:
				return {
                    ...currentState,
                    screen: payload,
                };

        case ScreenActions.SET_USER_CREDENTIALS:
                return {
                    ...currentState,
                    user: payload,
                };
                
                default:
                    return currentState;
        }
};