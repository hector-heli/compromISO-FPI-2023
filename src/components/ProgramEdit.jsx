import React, { useState, useEffect } from "react"
import { MdEditDocument } from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';



const ProgramEdit = ({ id, initials, code, name, learningResults }) => {
  return (
    <div className=" mt-3 p-5 dark:bg-secondary-dark-bg rounded-2xl">
      <div className="flex">
        <div>
          <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900 ">{initials}</p>
          <p className="text-lg text-gray-400">{code}</p>
        </div>
          <TooltipComponent
            className="tooltip-box"
            content="Editar programa"
            position="RightTop"
          >
            <button
              type="button"
              onClick={() => alert(initials)}
              style={{ backgroundColor: "#39A900", color:"white", borderRadius: "10px" }}
              className={'fixed text-sm p-2 w-12 hover:drop-shadow-xl hover:bg-gray-500'}
            > 
              <MdEditDocument size="32px" display="in-line-box"/> 
            </button>
          </TooltipComponent>        
      </div>  
        <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{name}</p>
        <p className="text-lg text-gray-400"> COMPETENCIAS </p>
        <ul>
          <li>{learningResults}</li>
        </ul>
    </div>
  )
}

export default ProgramEdit
