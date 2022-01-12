import React, {useEffect, useContext} from 'react'
import Textfield from '../base components/Textfield'
import DollarLogo from '../images/icon-dollar.svg'
import { CalculatorContext } from '../contexts/CalculatorContext'
import { useCheck } from '../hooks/useCheck'

function Bill() {

    const isAllFieldsProvided = useCheck()
    const {bill, setBill, percent, noOfPeople, customPercent, tipAmount, setTipAmount, setTotal} = useContext(CalculatorContext)

    useEffect(() => {

        const currentPercent = percent || (customPercent / 100);

        if (isAllFieldsProvided) {
            setTipAmount(bill * currentPercent / noOfPeople) 
            return;
        }
        setTipAmount(0)
    }, [bill])

    useEffect(() => {

        if (isAllFieldsProvided) {
            setTotal((bill / noOfPeople) + tipAmount)
            return;
        }
        setTotal(0)
    }, [tipAmount])
    
    return (
        <div className="flex flex-col items-stretch gap-2">
            <label className="text-[1rem] font-[700] text-tipDarkGrayishCyan " htmlFor="bill">Bill</label>
            <Textfield 
                value={bill !== 0 ? bill : ''} 
                onChange={(e) => { 
                    if (String(noOfPeople + e.target.value).search(/[^0-9.]/) === -1) {
                        setBill(e.target.value)

                        
                    }
                }} 
                type="" 
                id="bill" 
                svgLogo={DollarLogo} 
                addedClass="w-full placeholder:text-tipDarkGrayishCyan2" placeholderValue="0"/>
        </div>
    )
}

export default Bill
