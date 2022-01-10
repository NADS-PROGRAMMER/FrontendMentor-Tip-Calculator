import React from 'react'
import Bill from './Bill'
import TipPercents from './TipPercents'
import NumberOfPeople from './NumberOfPeople'

function TipCalculator() {
    return (
        <div className="flex flex-col gap-[1rem] items-stretch p-[2rem] bg-tipWhite">
            <Bill />
            <TipPercents />
            <NumberOfPeople />
        </div>
    )
}

export default TipCalculator
