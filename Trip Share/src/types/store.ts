export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
}

export enum Actions {
    "NAVIGATE" = "NAVIGATE",
}

export enum Screens {
	'LOGIN' = 'LOGIN',
	'DASHBOARD' = 'DASHBOARD',
}

