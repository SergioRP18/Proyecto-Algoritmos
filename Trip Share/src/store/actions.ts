import { Screens } from "../types/navigation";
import { ScreenActions } from "../types/store";
import { getPosts } from "../utils/Firebase";
import { getPostsByUser } from "../utils/Firebase";

export const navigate = (screen: Screens) => {
    return{
        type: ScreenActions.NAVIGATE,
        payload: screen,
    };
};

export const setUserCredentials = (user: string) => {
    return {
        type: ScreenActions.SET_USER_CREDENTIALS,
        payload: user,
    };
};

export const getPostsByUserAction = async () => {
	const postsByUser = await getPostsByUser(); 
	return {
		type: ScreenActions.GET_POSTS_BY_USER,
		payload: postsByUser,
	};
};

export const getPostsAction = async () => {
    const posts = await getPosts();
    return{
        type: ScreenActions.GET_POSTS,
        payload: posts,
    };
}
