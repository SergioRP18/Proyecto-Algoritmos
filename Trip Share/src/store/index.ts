import Storage, { PersistanceKeys } from "../utils/storage";
import { Screens } from "../types/navigation";
import { AppState, Actions, Observer } from "../types/store";
import { reducer } from "./reducer";

const emptyState = {
    screen: Screens.LOGIN,
};

export let appState: AppState = Storage.get<AppState>({
    key: PersistanceKeys.STORE,
    defaultValue: emptyState,
}) || emptyState;

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
    Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;

    persistStore(newState);
    notifyObservers();
};

export const addObserver = (ref: Observer) => {
    observers = [...observers, ref];
};
