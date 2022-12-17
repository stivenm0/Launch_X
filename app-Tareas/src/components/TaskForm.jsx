import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext';


function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {createTask}= useContext(TaskContext);

    const handleSubmit =(e)=>{
      e.preventDefault();
      createTask(title, description);
      setTitle(" ");
      setDescription(" ");
      e.target.reset();
    }


  return (
    <div className='max-w-md mx-auto font-bold'>
    <form onSubmit={handleSubmit} className='bg-slate-600 p-5 mb-4  '>
        <h1 className='text-2xl text-white mb-3'>Agregar Tarea</h1>
        <input 
        placeholder="Nombre de la tarea" type="text" 
        onChange={(e)=>{setTitle(e.target.value)}} 
        className='bg-slate-300 p-3 w-full mb-3'required />
        <br />
        <textarea cols="30" rows="3" 
        onChange={(e)=>{setDescription(e.target.value)}}  
        placeholder='Desripción' required
        className='bg-slate-300 p-3 w-full mb-3'/>
        <button className='bg-indigo-500 text-white px-3 py-1'>Save</button>
    </form>
    </div>
  )
}

export default TaskForm
