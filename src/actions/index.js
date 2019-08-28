import * as actionTypes from './action-types';
import {AUTH_LOGIN_SUCCESS} from "./action-types";

export const fetchUsers = (dispatch, api) => {
    dispatch({type: actionTypes.FETCH_USERS_REQUEST });
    api.getUsers()
        .then(response => dispatch({type: actionTypes.FETCH_USERS_SUCCESS, items: [...response]}))
        .catch(error => dispatch({type: actionTypes.FETCH_USERS_FAILURE}))
}

export const signIn = (dispatch, api, credentials) => {
    dispatch({type: actionTypes.AUTH_LOGIN_REQUEST });
    api.signIn(credentials)
        .then(response => {
            if (!response.Ok)
            dispatch({
            type: actionTypes.AUTH_LOGIN_SUCCESS,
            idToken: response.idToken,
            id: response.localId,
            refreshToken: response.refreshToken,
            email: response.email})
        })
        .catch(error => dispatch({type: actionTypes.AUTH_LOGIN_FAILURE, errorMessage: error}))
}