import React, {useContext} from 'react'
import Textfield from '../base components/Textfield'
import DollarLogo from '../images/icon-dollar.svg'
import { CalculatorContext } from '../contexts/CalculatorContext'

function Bill() {

    const {bill, setBill} = useContext(CalculatorContext)

    return (
        <div className="flex flex-col items-stretch gap-2">
            <label className="text-[1rem] font-[700] text-tipDarkGrayishCyan" htmlFor="bill">Bill</label>
            <Textfield value={bill} onChange={(e) => { 
                if (/0-9/ig.test(e.target.value))
                    setBill(e.target.value)
            }} type="" id="bill" svgLogo={DollarLogo} addedClass="w-full"/>
        </div>
    )
}

export default Bill
