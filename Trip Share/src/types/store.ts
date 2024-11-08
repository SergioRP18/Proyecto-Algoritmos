export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
    posts: [];
    postsByUser: [];
    user: '';
}

export enum ScreenActions {
    'NAVIGATE' = 'NAVIGATE',
    'SET_USER_CREDENTIALS' = 'SET_USER_CREDENTIALS',
    'GET_POSTS' = 'GET_POSTS',
    'GET_POSTS_BY_USER' = 'GET_POSTS_BY_USER'
}

export type Actions = ScreenActions;

