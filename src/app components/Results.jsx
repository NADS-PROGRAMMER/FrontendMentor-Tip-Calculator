import React, { useContext } from 'react'
import ResultLabel from '../base components/ResultLabel'
import { CalculatorContext } from '../contexts/CalculatorContext'
import { useCheck } from '../hooks/useCheck'

function Results() {

    // Contexts
    const { tipAmount, total, setBill, setPercent, setCustomPercent, setNoOfPeople } = useContext(CalculatorContext)
    const isAllFieldsProvided = useCheck()

    const reset = () => {

        if (isAllFieldsProvided) {
            document.querySelectorAll('.tip-button').forEach(element => {

                element.classList.remove('percent-clicked')
            })
            setBill(0)
            setPercent(0)
            setCustomPercent(0)
            setNoOfPeople(0)
        }
    }
    // Formatter (Currency is for USD).
    const formatter = (number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
    return (
        <div className="flex flex-col justify-between gap-[1rem] bg-tipVeryDarkCyan p-[4rem_2.5rem_2.6rem_2.5rem] rounded-[15px] h-full">

            <section className="flex flex-col lg:gap-[2rem]">
                {/* Tip Amount */}
                <section className="flex flex-wrap justify-between items-center">
                    <section>
                        <p className="font-[700] text-tipWhite">Tip Amount</p>
                        <span className="text-tipDarkGrayishCyan2 font-[400]">/ person</span>
                    </section>
                    <ResultLabel result={formatter(tipAmount)}/>
                </section>

                <section className="flex flex-wrap justify-between items-center">
                    <section>
                        <p className="font-[700] text-tipWhite">Total</p>
                        <span className="text-tipDarkGrayishCyan2 font-[400]">/ person</span>
                    </section>
                    <ResultLabel result={formatter(total)}/>
                </section>
            </section>
            
            <button 
                onClick={reset}
                className={`p-[.5rem] font-[700] text-[1.1rem] rounded-[5px]  text-tipVeryDarkCyan 
                ${isAllFieldsProvided ? 'bg-tipStrongCyan text-tipVeryDarkCyan hover:bg-tipLightGrayishCyan' : 
                'bg-tipStrongCyan bg-opacity-30 text-opacity-40 cursor-not-allowed'}`}>RESET</button>
        </div>
    )
}

export default Results
