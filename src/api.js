import React, {createContext, useContext} from "react";
import apiService from './services/api-service'

export const ApiContext = createContext();

const api = new apiService();

export const ApiProvider = ({children}) => (
    <ApiContext.Provider value={api}>
        {children}
    </ApiContext.Provider>
)

export const useApi = () => useContext(ApiContext);