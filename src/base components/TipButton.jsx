import React from 'react'

function TipButton({percent}) {

    /**
     * WHEN FOCUSED!
     * 
     * focus:bg-tipStrongCyan focus:text-tipVeryDarkCyan
     */
    return (
        <>
         <button className="relative bg-tipVeryDarkCyan max-w-[117px] w-full p-2 text-tipWhite font-[700] rounded-[6px] text-xl hover:bg-tipStrongCyan hover:bg-opacity-60 hover:text-tipVeryDarkCyan">{percent}%</button>   
        </>
    )
}

export default TipButton
