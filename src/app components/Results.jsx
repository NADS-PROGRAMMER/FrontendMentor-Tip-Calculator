import React from 'react'
import ResultLabel from '../base components/ResultLabel'

function Results() {

    const formatter = (number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
    return (
        <div className="flex flex-col justify-between gap-[1rem] bg-tipVeryDarkCyan p-[2rem_1.5rem_2rem_1.5rem] rounded-[15px] h-full">

            <section className="flex flex-col lg:gap-[2rem]">
                {/* Tip Amount */}
                <section className="flex justify-between items-center">
                    <section>
                        <p className="font-[700] text-tipWhite">Tip Amount</p>
                        <span className="text-tipDarkGrayishCyan2 font-[400]">/ person</span>
                    </section>
                    <ResultLabel result={formatter(0)}/>
                </section>

                <section className="flex justify-between items-center">
                    <section>
                        <p className="font-[700] text-tipWhite">Tip Amount</p>
                        <span className="text-tipDarkGrayishCyan2 font-[400]">/ person</span>
                    </section>
                    <ResultLabel result={formatter(0)}/>
                </section>
            </section>
            
            <button className="bg-tipStrongCyan bg-opacity-20 bg-opacity-1 p-[.5rem] font-[700] text-[1.1rem] rounded-[5px]  text-tipVeryDarkCyan text-opacity-40">RESET</button>
        </div>
    )
}

export default Results
