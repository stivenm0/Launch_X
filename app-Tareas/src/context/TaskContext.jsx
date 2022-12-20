import {createContext} from 'react'
import { useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {

  const [data, setData] = useState(localStorage.getItem('tsks')?
    JSON.parse(localStorage.getItem('tsks')): []
  );


  


  function createTask(title, description) {
    setData([
      ...data,
      {
        id: data.length,
        title,
        description,
      },
    ]);
  }

  function deleteTask(taskId){
    setData(data.filter(e=>e.id!=taskId))
  }

  useEffect(() => {
       localStorage.setItem('tsks', JSON.stringify(data));
  }, [data]);

  return (
    <TaskContext.Provider value={{data, createTask, deleteTask   }}>
        {props.children}
    </TaskContext.Provider>
  )
}

