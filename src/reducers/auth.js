import * as actionTypes from "../actions/action-types"

const auth = (state, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN_FAILURE:
            console.log("Action: ", action.type);
            return {
                status: "FAILURE",
                isAuthenticated: false,
                idToken: '',
                refreshToken: '',
                id: '',
                email: '',
                errorMessage: action.errorMessage
            };
        case actionTypes.AUTH_LOGIN_REQUEST:
            console.log("Action: ", action.type);
            return {
                status: "REQUEST",
                isAuthenticated: false,
                idToken: '',
                refreshToken: '',
                id: '',
                email: '',
                errorMessage: ''
            };
        case actionTypes.AUTH_LOGIN_SUCCESS:
            console.log("Action: ", action.type);
            return {
                status: "SUCCESS",
                isAuthenticated: true,
                idToken: action.idToken,
                id: action.id,
                refreshToken: action.refreshToken,
                email: action.email,
                errorMessage: ''
            };
        default:
            return state;
    }
}

export default auth