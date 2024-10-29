import { Screens } from "../types/navigation";

export const navigate = (screen: Screens) => {
    return{
        action:"NAVIGATE",
        payload: screen,
    }
}