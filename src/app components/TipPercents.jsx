import React, { useContext } from 'react'
import TipButton from '../base components/TipButton'
import { CalculatorContext } from '../contexts/CalculatorContext'

function TipPercents() {

    const { percent, setPercent, customPercent, setCustomPercent } = useContext(CalculatorContext)

    const availablePercents = [5, 10, 15, 25, 50];

    const removeClass = () => {

        document.querySelectorAll('.tip-button').forEach(element => {

            element.classList.remove('percent-clicked')
        })
    }

    return (
        <div className="flex flex-col items-stretch gap-[13px]">
            <label className="text-[1rem] font-[700] text-tipDarkGrayishCyan"  htmlFor="">Select Tip %</label>
            <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-3">
                {
                    availablePercents.map(percent => {
                        return (
                            <TipButton 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeClass()
                                    e.target.classList.add('percent-clicked')
                                    setCustomPercent(0)
                                    setPercent(percent / 100)
                                }}
                                onDblClick={() => { 
                                    removeClass()
                                    setPercent(0)
                                }}
                                percent={percent} 
                                addedClass="tip-button flex-[1_1_117px]"/>
                        )
                    })
                }
                <CustomPercents 
                    percent={customPercent !== 0 ? customPercent : ''}
                    onClick={() => {
                        removeClass();
                        setPercent(0)
                    }}
                    onChange={(e) => {
                        if (e.target.value === '.')
                            setCustomPercent('0.')
                        else if (String(percent + e.target.value).search(/[^0-9.]/) === -1)
                            setCustomPercent(e.target.value)
                    }}
                 />
            </div>
        </div>
    )
}

function CustomPercents({ onClick, onChange, percent }) {

    return (
        <input
             onClick={onClick} 
             onChange={onChange}
             value={percent}
             className="bg-tipLightGrayishCyan text-[24px] max-h-[48px] bg-opacity-30 p-[.5rem] rounded-[5px] text-right text-tipVeryDarkCyan font-spaceMono font-[700] focus:outline-2 focus:outline-tipStrongCyan outline-none placeholder:text-tipVeryDarkCyan placeholder:text-opacity-80" 
             type="text" 
             placeholder='Custom' />
    )
}
export default TipPercents
