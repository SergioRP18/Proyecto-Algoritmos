import Storage, { PersistanceKeys } from "../utils/Storage";
import { Screens } from "../types/navigation";
import { AppState, Observer, ScreenActions } from "../types/store";
import { reducer } from "./reducer";
import { getFirebaseInstance } from "../utils/Firebase";
import { navigate, setUserCredentials } from "./actions";
import { onAuthStateChanged } from "firebase/auth";

const onAuth = async () => {
	const { auth } = await getFirebaseInstance();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			user.uid !== null ? dispatch(setUserCredentials(user.uid)) : ''; //Es la que se encarga de guardar el id del usuario
			dispatch(navigate(Screens.DASHBOARD)); //Esta es la de navegar a dashboard
		} else {
			dispatch(navigate(Screens.LOGIN));
		}
	});
};

onAuth();

const initialState: AppState = {
	screen: Screens.DASHBOARD,
	posts: [],
	user: '',
	postsByUser: [],
};

export let appState = initialState;

let observers: Observer[] = [];

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	observers.forEach((o: any) => o.render());
};

export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};

