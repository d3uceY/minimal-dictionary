import { useContext, useState } from "react";
import React from "react";


const InputContext = React.createContext() //*

export const useInput = () => {
    return useContext(InputContext)
}

export function InputContextProvider({ children }) {
    const [inputValue, setInputValue] = useState('')

    const value = {
        inputValue, setInputValue
    }


    return (
        <InputContext.Provider value={value}>
            {children}
        </InputContext.Provider>
    )
}

//Deuce's notes

//React.createContext is a funtion so it has to look like this 
//React.createContext() with parentheses
