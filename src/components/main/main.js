import React, {useEffect} from 'react';
import {useStateValue} from '../../context/state'
import {useApi} from "../../context/api";
import {fetchUsers, signIn, signUp} from "../../actions";

const Main = () => {
    const [state, dispatch] = useStateValue();
    const api = useApi();

    const getUsers = () => fetchUsers(dispatch, api);
    const login = (credentials) => signIn(dispatch, api, credentials);
    const register = (credentials) => signUp(dispatch, api, credentials);

    useEffect(getUsers, []);

    const {theme, user, users} = state;
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
            <br/>
            <button onClick={getUsers}> Get data </button>
            {users.status==='LOADING' && <div>Loading ...</div>}
            {users.status==='ERROR' && <div>Unable to get data</div>}
            <ul>
                {users.items.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            <button onClick={() => login({email: "test1@example.com", password: "Example"})}>Login</button>
            <button onClick={() => register({email: "test4@example.com", password: "Example"})}>Register</button>
        </div>

    )
}

export default Main