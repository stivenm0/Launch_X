import { useContext } from 'react';
import TaskCard from '../components/TaskCard';
import { TaskContext } from '../context/TaskContext';


function Task(){
 
    const {data}= useContext(TaskContext);
    
    if(data.length===0){
        return <h1 className='text-2xl text-white font-bold text-center'>No hay tareas</h1>
    }

    
    return (
    <div className='grid grid-cols-1 sm:grid-cols-4  gap-3 ' >{data.map(task=>(
        <TaskCard key={task.id} data={task}/>

    ))}  
    </div>);
}

export default Task