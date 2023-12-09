import { useContext, useState } from "react";
import React from "react";


const InputContext = React.createContext() //*
const ResponseContext = React.createContext()

export const useInput = () => {

    return useContext(InputContext)

}


export const useResponse = () => {

    return useContext(ResponseContext)

}

export function InputContextProvider({ children }) {
    const [inputValue, setInputValue] = useState('')

    const [response, setResponse] = useState("")


    //this is the state tha stores the input value
    const value = {
        inputValue, setInputValue
    }

    //this is the state that stores the response
    const responseValue = {
        response, setResponse
    }


    return (
        <InputContext.Provider value={value}>
            <ResponseContext.Provider value={responseValue}>
                {children}
            </ResponseContext.Provider>
        </InputContext.Provider>
    )
}

//Deuce's notes

//React.createContext is a funtion so it has to look like this
//React.createContext() with parentheses
