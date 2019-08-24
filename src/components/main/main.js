import React from 'react';
import {useStateValue} from '../../state'

const Main = () => {
    const [ state, dispatch] = useStateValue();
    const {theme, user} = state;
    const {color} = theme;
    const {name} = user;
    console.log('State: ', state);

    return(
        <div>
            <div><span>Color: </span> {color} </div>
            <button onClick={() => dispatch({type: "CHANGE_THEME", color: "blue"})}>Blue</button>
            <button onClick={() => dispatch({type: "CHANGE_THEME", color: "green"})}>Green</button>
            <div><span>User: </span> {name} </div>
            <button onClick={() => dispatch({type: "CHANGE_USER", name: "User 1"})}>User 1</button>
            <button onClick={() => dispatch({type: "CHANGE_USER", name: "User 2"})}>User 2</button>
        </div>

    )
}

export default Main