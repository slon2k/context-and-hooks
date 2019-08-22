import React from 'react';
import {useStateValue} from '../../state'

const Main = () => {
    const [ state, dispatch] = useStateValue();
    console.log('State: ', state);
    const {primary} = state.theme
    return(
        <div>
            <div><span>State: </span> {primary} </div>
            <button onClick={() => dispatch({type: "CHANGE_THEME", theme: {primary: "blue"}})}>Blue</button>
            <button onClick={() => dispatch({type: "CHANGE_THEME", theme: {primary: "green"}})}>Green</button>
        </div>
    )
}

export default Main