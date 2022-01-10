import React, {useContext} from 'react'
import Textfield from '../base components/Textfield'
import PeopleLogo from '../images/icon-person.svg'
import { CalculatorContext } from '../contexts/CalculatorContext'

function NumberOfPeople() {

    const {noOfPeople, setNoOfPeople} = useContext(CalculatorContext)

    return (
        <div className="flex flex-col items-stretch gap-[13px]">
            <label className="font-[700] text-tipDarkGrayishCyan text-[1rem]"  htmlFor="people">Number of People</label>
            <Textfield value={noOfPeople} type="text" id="people" svgLogo={PeopleLogo} addedClass="w-full"/>
        </div>
    )
}

export default NumberOfPeople
