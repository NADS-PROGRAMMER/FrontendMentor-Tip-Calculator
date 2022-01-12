import { useContext } from 'react'
import { CalculatorContext } from '../contexts/CalculatorContext'

function useCheck() {

    const { percent, customPercent, bill, noOfPeople} = useContext(CalculatorContext)
    const currentPercent = percent || (customPercent / 100)
        
    if (bill && noOfPeople && currentPercent) {
        return true;             
    }
    return false;
}

export { useCheck }
