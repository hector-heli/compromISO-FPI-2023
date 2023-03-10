import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const DataButton = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
// const { setIsClicked, initialState } = useStateContext();

  const fetchTasks = async() => {
    await fetch('/api/tasks');
    //fetch('/search?q=proxy')
    ( res => res.json);
    ( data => {
      this.setState({ tasks:data});
      console.log(this.state.tasks);
    });
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
