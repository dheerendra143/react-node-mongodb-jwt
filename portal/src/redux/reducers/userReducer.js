
import { globalState } from "../globalState";

// eslint-disable-next-line import/no-anonymous-default-export
const userReducer = (state = globalState, action) => {
    switch (action.type) {
        case "signOut":
            return {
                ...state,
                isLoggedin: false,
                userDetails: {}
            };
        case "signIn":
            return {
                ...state,
                isLoggedin: true,
                userDetails: action.payload
            };
        case "rotate":
            return {
                ...state,
                rotating: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer