import React, { useState, useEffect } from "react"
import { MdEditDocument } from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';



const ProgramEdit = ({ id, initials, code, name, learningResults }) => {
  const {editClicked, setEditClicked } = useState[false];
  
  return (
    <div className=" mt-3 p-5 dark:bg-secondary-dark-bg rounded-2xl">
      {{ editClicked } ? (
        <div className="flex justify-between">
          <div>
            <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900 ">{initials}</p>
            <p className="text-lg text-gray-400">{code}</p>
          </div>
          <TooltipComponent
            content="Editar programa"
            position="TopCenter"
          >
            <button
              type="button"
              onClick={() => setEditClicked(true)}
              style={{ backgroundColor: "#39A900", color:"white", borderRadius: "10px" }}
              className={'ml-4 p-2 w-12 hover:drop-shadow-xl hover:bg-gray-500'}
            > 
              <MdEditDocument size="32px" display="in-line-box"/> 
            </button>
          </TooltipComponent> 
          <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{name}</p>
          <p className="text-lg text-gray-400"> COMPETENCIAS </p>
          <ul>
            <li>{learningResults}</li>
          </ul>
      </div>        
      ) : (
        <div>
          <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900 ">{initials}</p>
          <p className="text-lg text-gray-400">{code}</p>
        </div>
      )
    }
  </div>
  )
}


export default ProgramEdit
