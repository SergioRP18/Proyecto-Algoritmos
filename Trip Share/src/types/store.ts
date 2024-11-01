export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
    user: '';
}

export enum ScreenActions {
    'NAVIGATE' = 'NAVIGATE',
    'SET_USER_CREDENTIALS' = 'SET_USER_CREDENTIALS',
}

export type Actions = ScreenActions;

