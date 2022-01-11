import React from 'react'

function TipButton({ percent, addedClass, onClick, onDblClick }) {

    /**
     * WHEN FOCUSED!
     * 
     * focus:bg-tipStrongCyan focus:text-tipVeryDarkCyan
     */
    return (
        <>
         <button 
            onClick={onClick}
            onDoubleClick={onDblClick}
            className={`relative max-h-[48px] bg-tipVeryDarkCyan w-full p-[.65rem] text-tipWhite font-[700] rounded-[6px] text-xl hover:bg-tipStrongCyan hover:bg-opacity-60 hover:text-tipVeryDarkCyan ${addedClass}`}>{percent}%</button>   
        </>
    )
}

export default TipButton
