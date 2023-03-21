import React, { useState, useEffect } from 'react'


import { customersData, customersGrid } from '../data/dummy';
import { CardEntities, Button } from '../components'
import { Header } from '../components';

const Programs = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  // const { currentColor, currentMode } = useStateContext();

  const [programs, setPrograms] = useState([]);
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

  const fetchPrograms = async () => {
    try{
      const res = await fetch ('/api/prorgams');
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
      <div className="mt-5">
        <Button
          color="white"
          bgColor="green"
          text="Nuevo programa"
          borderRadius="10px"
          width="full"
          onClick={addProgram}
        />
      </div>
      <CardEntities />
    </div>
  )
}

export default Programs
