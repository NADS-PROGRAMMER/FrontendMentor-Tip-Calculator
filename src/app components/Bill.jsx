import React, {useEffect, useContext} from 'react'
import Textfield from '../base components/Textfield'
import DollarLogo from '../images/icon-dollar.svg'
import { CalculatorContext } from '../contexts/CalculatorContext'
import { useCheck } from '../hooks/useCheck'

function Bill() {

    // Hooks that checks if all of the required inputs are provided.
    const isAllFieldsProvided = useCheck()

    // All of the states from our CalculatorContext.
    const {bill, setBill, percent, noOfPeople, customPercent, tipAmount, setTipAmount, setTotal} = useContext(CalculatorContext)

    /**
     * RUNS whenever the 'bill' state changes. */
    useEffect(() => {

        /** Evaluate if the user chooses one 
         * of the buttons or they give a custom percents */
        const currentPercent = percent || (customPercent / 100);

        if (isAllFieldsProvided) {
            setTipAmount(bill * currentPercent / noOfPeople) 
            return;
        }
        setTipAmount(0)
    }, [bill])

    /**
     * RUNS whenever the 'tipAmount' state changes. */
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
                onChange={(event) => { 

                    const pattern = /(^\d+$|^\d+\.$|^\d+\.\d+$)/

                    if (pattern.test(event.target.value) || event.target.value == '') {
                        console.log('wow2')
                        setBill(event.target.value)
                    }
                }} 
                type="tel" 
                id="bill" 
                svgLogo={DollarLogo} 
                addedClass="w-full placeholder:text-tipDarkGrayishCyan2 focus:outline focus:outline-tipStrongCyan" placeholderValue="0"/>
        </div>
    )
}

export default Bill
