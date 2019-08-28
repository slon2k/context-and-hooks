import * as actionTypes from "../actions/action-types"

const users = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_FAILURE:
            console.log("Action: ", action.type);
            return { status: "ERROR", items: []};
        case actionTypes.FETCH_USERS_REQUEST:
            console.log("Action: ", action.type);
            return { status: "LOADING", items: []};
        case actionTypes.FETCH_USERS_SUCCESS:
            console.log("Action: ", action.type);
            return { status: "SUCCESS", items: action.items};
        default:
            return state;
    }

}

export default users