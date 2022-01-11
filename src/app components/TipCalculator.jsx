import React from 'react'
import Bill from './Bill'
import TipPercents from './TipPercents'
import NumberOfPeople from './NumberOfPeople'
import Results from './Results'

function TipCalculator() {
    return (
        <div className="flex flex-col gap-[1rem] items-stretch p-[2rem] bg-tipWhite rounded-[31px] lg:grid lg:grid-cols-2 max-w-[924px] lg:place-content-stretch lg:gap-[47px]">
            <section className="flex flex-col gap-[1rem] items-stretch bg-tipWhite">
                <Bill />
                <TipPercents />
                <NumberOfPeople />
            </section>
            <section>
                <Results />
            </section>
        </div>
    )
}

export default TipCalculator
