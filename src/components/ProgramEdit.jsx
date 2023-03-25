import React, { useState, useEffect } from 'react'

import { Button, Header } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const ProgramEdit = () => {
  const { currentColor, currentMode } = useStateContext();
  const [program, setProgram] = useState([]);
  let text;

  useEffect (async () => {
    try{
      const res = await fetch ('/api/programs');
      const json = await res.json();
      console.log(json);
      setPrograms(json);
    } catch (err) {
      console.log('error', err);
    }
  }, [])

  const fetchPrograms = async () => {
    try{
      const res = await fetch ('/api/programs');
      const json = await res.json();
      programs.map((program, index) => {
        text += (index +' '+program.title + '\n')
      })
      alert(text);
    } catch (err) {
      console.log('error', err);
    }
  } 

  const addProgram = async () => {
    try{
      const res = await fetch ('/api/programs',{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: 'program from MERN App',
          description: 'This a program uploaded from CompromISO App'  })
      });
      
      const response = await fetch ('/api/programs')
      const json = await response.json();
      alert('done', json);
      fetchPrograms();
    } catch (err) {
      console.log('error', err);
    }
  } 

  return ( 
    <div className = "m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:" >
      <Header category = "Página" title = "Programas de Formación" />
      <div className="mt-2">
        <Button
          color="white"
          bgColor="green"
          text="Nuevo programa"
          borderRadius="10px"
          width="50%"
          onClick={addProgram}
        />
      </div>
        { programs.map( program => {
          return (
            <div className=" mt-3 mb-5 dark:bg-[#00324D] rounded-xl pl-4 pt-4">
              <div className= "inline-flex gap-5">
              <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200">
                { program.initials}
              </p>
              <Button
                color="white"
                bgColor="green"
                text="Editar"
                borderRadius="10px"
                width="50%"
                onClick={()=> <CardEntities />}
              />
              </div>
              
              <p className="text-lg text-gray-400">{ program.name }</p>
    
            </div>
          )
        }) }
        

    </div>
  )
}

export default ProgramEdit
