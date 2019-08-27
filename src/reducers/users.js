import * as actionTypes from "../actions/action-types"

const users = (state, action) => {
    console.log("Action: ", action.type);
    switch (action.type) {
        case actionTypes.FETCH_USERS_ERROR:
            return { status: "ERROR", items: []};
        case actionTypes.FETCH_USERS_REQUEST:
            return { status: "LOADING", items: []};
        case actionTypes.FETCH_USERS_SUCCESS:
            return { status: "SUCCESS", items: action.items};
        default:
            return state;
    }

}

export default users