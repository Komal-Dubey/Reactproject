import React, { useState } from "react";

const Inputtextfield = ()=>{
   const[input, setInput] = useState('')

   console.log(setInput)
    return (
        <div className="flex gap-1 justify-center m-3">
            <input
            type="text"
            placeholder="Enter text here"
            className="border border-gray-600 rounded-xl px-3 "
            value={input}
            onchange={(e)=> setInput(e.target.value)}
            /> 
            <button type="Submit" className="border border-gray-400 bg-purple-800 rounded-xl py-1 px-2 text-white">Save</button>
        </div>
    )
}
  export default Inputtextfield; 
