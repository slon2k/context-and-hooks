import React from 'react';
import {StateProvider} from "../../state";
import reducer from '../../reducers'
import Main from "../main";

const App = () => {

    const initialState = {
        theme: {primary: 'green'}
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Main/>
        </StateProvider>
    )
}

export default App