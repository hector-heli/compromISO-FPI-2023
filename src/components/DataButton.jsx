import React, { useState } from 'react';

const DataButton = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {

const fetchTasks = async() => {
  const [ tasks, setTasks ] = useState();

  const dataFetched = fetch('/api/tasks');
  //fetch('/search?q=proxy')
  res => res.json;
  console.log(res);
  }

  return (
    <button
      type="button"
      onClick={() => {fetchTasks()}}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default DataButton;
