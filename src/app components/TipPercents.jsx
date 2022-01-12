import React, { useEffect, useContext } from 'react'
import TipButton from '../base components/TipButton'
import { CalculatorContext } from '../contexts/CalculatorContext'
import { useCheck } from '../hooks/useCheck'

function TipPercents() {

    const isAllFieldsProvided = useCheck()
    const {bill, noOfPeople, percent, setPercent, customPercent, setCustomPercent, tipAmount, setTipAmount, setTotal } = useContext(CalculatorContext)
    
    const availablePercents = [5, 10, 15, 25, 50];

    const removeClass = () => {

        document.querySelectorAll('.tip-button').forEach(element => {

            element.classList.remove('percent-clicked')
        })
    }

    useEffect(() => {

        const currentPercent = percent || (customPercent / 100)
        
        if (isAllFieldsProvided) {
            setTipAmount(bill * currentPercent  / noOfPeople) 
            return;                           
        }
        setTipAmount(0)
        setTotal(0) 
    }, [percent, customPercent])
    
    useEffect(() => {

        if (isAllFieldsProvided) {
            setTotal((bill / noOfPeople) + tipAmount)
            return;
        } 
        setTotal(0)
    }, [tipAmount])

    return (
        <div className="flex flex-col items-stretch gap-[13px]">
            <label className="text-[1rem] font-[700] text-tipDarkGrayishCyan"  htmlFor="">Select Tip %</label>
            <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-3">
                {
                    availablePercents.map(percentItem => {
                        return (
                            <TipButton 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeClass()
                                    e.target.classList.add('percent-clicked')
                                    setCustomPercent(0)
                                    setPercent(percentItem / 100)
                                }}
                                onDblClick={() => { 
                                    removeClass()
                                    setPercent(0)
                                }}
                                percent={percentItem} 
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
                    onChange={(event) => {
                        const pattern = /(^\d+$|^\d+\.$|^\d+\.\d+$)/

                        if (pattern.test(event.target.value) || event.target.value == '') {
                            setCustomPercent(event.target.value)
                        }
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
             type="tel" 
             placeholder='Custom' />
    )
}
export default TipPercents
