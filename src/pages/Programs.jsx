import React, { useState, useEffect } from 'react'
import { MdEditDocument } from "react-icons/md";

import { ProgramEdit, Button } from '../components'
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Programs = () => {
  const { currentColor, currentMode } = useStateContext();
  const [programs, setPrograms] = useState([]);
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
  } , [])

  const addProgram = async (e) => {
    e.preventDefault();
    if(programs._id){
      const program = await fetch(`/api/programs/${programs._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          code: program.code,
          name: program.name,
          initials: program.initials,
          learningResults: program.learningResults
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      alert(program);
    } else {
    try{
      const res = await fetch ('/api/programs',{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
          code: program.code,
          name: program.name,
          initials: program.initials,
          learningResults: program.learningResults  
        })
      });
      res => res.json();
      alert(res.json());
    } catch (err) {
      console.log('error', err);
    }
    setProgram([]);
    fetchPrograms();
    }
  } 

  const editProgram = async(id) => {
    res = await fetch(`/api/programs/${id}`);
    data = res.json();
    setProgram(data);
  }

  const fetchPrograms = async () => {
    try{
      const res = await fetch ('/api/programs');
      const json = res.json();
      setPrograms(json);
      programs.map((program, index) => {
        text += (index +' '+program.title + '\n')
      })
      alert(text);
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
          bgColor="#39A900"
          text="Nuevo programa"
          borderRadius="10px"
          width="50%"
          onClick={addProgram}
          icon={ MdEditDocument }
        />
      </div>
      <div>        
        { programs.map( program => {
          return (
            <ProgramEdit 
              id={ program._id }
              initials={ program.initials }
              code={ program.code }
              name={ program.name }
              learningResults={ program.learningResults }
              
            />
          )
        }) }
      </div> 
    </div>
  )
}

export default Programs
