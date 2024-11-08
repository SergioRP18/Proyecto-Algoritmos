import { Screens } from "../types/navigation";
import { ScreenActions } from "../types/store";
import { getPosts } from "../utils/Firebase";
import { getPostsByUser } from "../utils/Firebase";

export const navigate = (screen: Screens) => {
    console.log('screen in action', screen);
    
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

export const getPostsByUserAction = async () => {
	const postsByUser = await getPostsByUser(); 
	return {
		action: ScreenActions.GET_POSTS_BY_USER,
		payload: postsByUser,
	};
};

export const getPostsAction = async () => {
    const posts = await getPosts();
    return{
        action: ScreenActions.GET_POSTS,
        payload: posts,
    };
}
