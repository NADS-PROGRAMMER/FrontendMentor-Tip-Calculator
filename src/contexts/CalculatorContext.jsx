import React, {useState} from 'react'

export const CalculatorContext = React.createContext(null);

export function CalculatorProvider( props ) {

    const [bill, setBill] = useState(0)
    const [noOfPeople, setNoOfPeople] = useState(0)
     
    return (

        <CalculatorContext.Provider value={{bill, setBill, noOfPeople, setNoOfPeople}}>
            {props.children}
        </CalculatorContext.Provider>
    )
}