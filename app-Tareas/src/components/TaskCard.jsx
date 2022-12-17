import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({data}) {
   
  const {deleteTask} =useContext(TaskContext);

  return (
    <div className='bg-slate-900 text-white p-2 rounded-md'>       
          <h1 className='text-xl font-bold capitalize'>{data.title}</h1>
          <p className='text-gray-400' >{data.description}</p>
          <button onClick={()=>{deleteTask(data.id)}} 
          className='bg-red-600 px-2 py-1 mt-4 rounded-md hover:bg-red-400'>Eliminar Tarea
          </button>         
    </div>
  )
}

export default TaskCard