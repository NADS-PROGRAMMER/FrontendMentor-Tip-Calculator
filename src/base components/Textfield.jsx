import React from 'react'

function Textfield({ type, svgLogo }) {
    return (
        <section className="relative">
         <img className="absolute transform top-1/2 -translate-y-1/2 left-[10px]" src={svgLogo} alt="" />
         <input className="bg-tipLightGrayishCyan p-[.5rem] rounded-[5px] text-right text-tipVeryDarkCyan font-spaceMono font-[700] focus:border-2 focus:border-tipStrongCyan outline-none" type={type}  />   
        </section>
    )
}

export default Textfield
