import React from 'react'

function Textfield({ type, id, svgLogo, value, addedClass, onChange, placeholderValue }) {
    return (
        <section className="relative">

         <img className="absolute transform top-1/2 -translate-y-1/2 left-[15px]" src={svgLogo} alt="" />

         <input className={`bg-tipLightGrayishCyan text-[24px] bg-opacity-30 p-[.5rem_1rem] rounded-[5px] text-right text-tipVeryDarkCyan font-spaceMono font-[700]  ${addedClass}`} placeholder={placeholderValue} type={type} id={id} value={value} onChange={onChange}/>  
          
        </section>
    )
}

export default Textfield
