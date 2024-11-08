import { ScreenActions } from "../types/store";

export const reducer = (currentAction: any, currentState: any) => {
    const { action, payload } = currentAction;

    switch(action.type){
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
        
        case ScreenActions.GET_POSTS:
            return {
                ...currentState,
                posts: payload,
            };

        case ScreenActions.GET_POSTS_BY_USER:
            return {
                ...currentState,
                getPostsByUser: payload,
            };
                
                default:
                    return currentState;
        }
};