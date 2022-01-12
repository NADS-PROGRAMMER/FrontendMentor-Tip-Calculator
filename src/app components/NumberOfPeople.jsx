import React, { useState, useEffect, useContext } from 'react'
import Textfield from '../base components/Textfield'
import PeopleLogo from '../images/icon-person.svg'
import { CalculatorContext } from '../contexts/CalculatorContext'
import { useCheck } from '../hooks/useCheck'

function NumberOfPeople() {

    const isAllFieldsProvided = useCheck()
    const {bill, percent, noOfPeople, setNoOfPeople, customPercent, tipAmount, setTipAmount, setTotal} = useContext(CalculatorContext)

    useEffect(() => {

        const currentPercent = percent || (customPercent / 100);

         if (isAllFieldsProvided && noOfPeople != 0) {
             setTipAmount(bill * currentPercent / noOfPeople);
             return;
         }
         setTipAmount(0);
    }, [noOfPeople])

    useEffect(() => {

        if (isAllFieldsProvided) {
            setTotal((bill / noOfPeople) + tipAmount)
            return;
        }
        setTotal(0)
    }, [tipAmount])

    return (
        <div className="flex flex-col items-stretch gap-[13px]">

            <section className="flex justify-between">
                <label 
                    className="font-[700] text-tipDarkGrayishCyan text-[1rem]"  htmlFor="people">
                        Number of People
                </label>
                { noOfPeople == 0 && noOfPeople != '' && <span className="text-red-500 font-[700]">
                    Can't be zero
                </span> }
            </section>
            

            <Textfield 
                value={noOfPeople !== 0 ? noOfPeople : ''} 
                onChange={(e) => {

                    if (String(noOfPeople + e.target.value).search(/[^0-9]/) === -1)
                        setNoOfPeople(e.target.value)
                }}
                type="text" 
                id="people" 
                svgLogo={PeopleLogo} 
                addedClass={`w-full placeholder:text-tipDarkGrayishCyan2 ${noOfPeople == 0 && noOfPeople != '' ? 'focus:outline outline-none outline-2 outline-red-500' : 'focus:outline focus:outline-tipStrongCyan'}`} placeholderValue="0"/>
        </div>
    )
}

export default NumberOfPeople
