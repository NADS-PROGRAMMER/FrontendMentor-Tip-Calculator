import React, {useState} from 'react'

export const CalculatorContext = React.createContext(null);

export function CalculatorProvider( props ) {

    const [bill, setBill] = useState('')
    const [noOfPeople, setNoOfPeople] = useState('')
    const [percent, setPercent] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    return (

        <CalculatorContext.Provider value={{bill, setBill, noOfPeople, setNoOfPeople, percent, setPercent, tipAmount, setTipAmount, total, setTotal}}>
            {props.children}
        </CalculatorContext.Provider>
    )
}