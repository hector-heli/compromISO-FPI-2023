import React, { useState, useEffect } from "react";


const DataButton = ({ downOrUp, icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {

  const [tasks, setTasks] = useState([]);

  useEffect (async () => {
    try{
      const res = await fetch ('/api/tasks');
      const json = await res.json();
      console.log(json);
      setTasks(json);
    } catch (err) {
      console.log('error', err);
    }
  } , [tasks])

  const fetchTasks = async () => {
    try{
      const res = await fetch ('/api/tasks');
      const json = await res.json();
      console.log(tasks);
      tasks.map((task, index) => {
        console.log(index, task.title);
      })
    } catch (err) {
      console.log('error', err);
    }
  } 

  const addTask = async () => {
    try{
      const res = await fetch ('/api/tasks',{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: 'task from MERN App',
          description: 'This a task uploaded from CompromISO App'  })
      });
      
      const json = await res.json();
      alert('done', res);
    } catch (err) {
      console.log('error', err);
    }
  } 
  return (
    <button
      type="button"
      onClick={ downOrUp ? fetchTasks : addTask }
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
}

export default DataButton;