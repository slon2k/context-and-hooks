import React, {useEffect} from 'react';
import {useStateValue} from '../../context/state'
import {useApi} from "../../context/api";
import {fetchUsers} from "../../actions";

const Main = () => {
    const [state, dispatch] = useStateValue();
    const api = useApi();
    const getUsers = () => fetchUsers(dispatch, api);
    useEffect(getUsers, []);
    const {theme, user} = state;
    const {color} = theme;
    const {name} = user;
    console.log('State: ', state);

    return (
        <div>
            <div><span>Color: </span> {color} </div>
            <button onClick={() => dispatch({type: "CHANGE_THEME", color: "blue"})}>Blue</button>
            <button onClick={() => dispatch({type: "CHANGE_THEME", color: "green"})}>Green</button>
            <div><span>User: </span> {name} </div>
            <button onClick={() => dispatch({type: "CHANGE_USER", name: "User 1"})}>User 1</button>
            <button onClick={() => dispatch({type: "CHANGE_USER", name: "User 2"})}>User 2</button>
            <button
                onClick={() => api.getUsers()
                    .then(response => console.log(response))
                    .catch(error => console.log(error))}
            >
                Get data
            </button>
        </div>

    )
}

export default Main