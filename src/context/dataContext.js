import { createContext, useContext } from "react";
import {data} from '../data/data'

const DataContext = createContext()

export const dataProvider = (props) => {
    const { children } = props

    return (
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)