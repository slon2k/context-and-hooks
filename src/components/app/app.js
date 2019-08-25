import React from 'react';
import {StateProvider} from "../../state";
import {ApiProvider} from "../../api";
import reducer from '../../reducers'
import Main from "../main";


const App = () => {

    const initialState = {
        theme: {},
        user: {}
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <ApiProvider>
                <Main/>
            </ApiProvider>
        </StateProvider>
    )
}

export default App