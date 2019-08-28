import * as actionTypes from './action-types';

export const fetchUsers = (dispatch, api) => {
    dispatch({type: actionTypes.FETCH_USERS_REQUEST });
    api.getUsers()
        .then(response => dispatch({type: actionTypes.FETCH_USERS_SUCCESS, items: [...response]}))
        .catch(error => dispatch({type: actionTypes.FETCH_USERS_ERROR}))
}