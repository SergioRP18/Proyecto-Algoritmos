export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
    posts: [];
    postsByUser: [];
    user: '';
    us: PersonalUser;
    logedUserData: {
        email: string;
        password: string;
        confirmPassword: string;
        name: string;
    }
    followers: Set<string>,
    following: Set<string>,
}


export enum ScreenActions {
    'NAVIGATE' = 'NAVIGATE',
    'SET_USER_CREDENTIALS' = 'SET_USER_CREDENTIALS',
    'GET_POSTS' = 'GET_POSTS',
    'GET_POSTS_BY_USER' = 'GET_POSTS_BY_USER'
}

export interface PersonalUser {
    name: string;
    email: string;
    photo: string;
    saved?: any[];
}

export type Actions = ScreenActions;

