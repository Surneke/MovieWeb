import { createContext, useContext } from "react";
import {data} from '../data/data'

const SaveBtnContext = createContext()

export const ButtonProvider = (props) => {
    const { children } = props

    return (
        <SaveBtnContext.Provider value={{data}}>
            {children}
        </SaveBtnContext.Provider>
    )
}

export const useBtnContext = () => useContext(SaveBtnContext)