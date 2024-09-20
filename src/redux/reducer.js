import { LOGIN_SUCCESS } from "./actions";

const initialState = {
    sessionId: null,
    username: null,
    balance: 0,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                sessionId: action.payload.sessionId,
                username: action.payload.username,
                balance: action.payload.balance,
            }
        default:
            return state;
    }
}