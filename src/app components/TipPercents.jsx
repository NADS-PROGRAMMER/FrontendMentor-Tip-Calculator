import React from 'react'
import TipButton from '../base components/TipButton'

function TipPercents() {

    const availablePercents = [5, 10, 15, 25, 50];

    return (
        <div className="flex flex-col items-stretch gap-[13px]">
            <label className="text-[1rem] font-[700] text-tipDarkGrayishCyan"  htmlFor="">Select Tip %</label>
            <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-3">
                {
                    availablePercents.map(percent => <TipButton percent={percent} addedClass="flex-[1_1_117px]"/>)
                }
                <CustomPercents />
            </div>
        </div>
    )
}

function CustomPercents() {

    return (
        <input className="bg-tipLightGrayishCyan text-[24px] max-h-[48px] bg-opacity-30 p-[.5rem] rounded-[5px] text-right text-tipVeryDarkCyan font-spaceMono font-[700] focus:border-2 focus:border-tipStrongCyan outline-none placeholder:text-tipVeryDarkCyan placeholder:text-opacity-80" type="text" placeholder='Custom' />
    )
}
export default TipPercents
