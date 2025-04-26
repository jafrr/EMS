import React from 'react'
import { useState,useContext  } from 'react'
import { AuthContext} from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData,setUserData] = useContext(AuthContext)

const [taskTitle, setTaskTitle] = useState('')
const [date, setDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [newTask, setNewTask] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
        setNewTask({taskTitle,date,category,taskDescription,active:false,newTask:true,failed:false,completed:false})
        const data = userData
     

      data.forEach(function(elem){
        if(assignTo ==elem.firstName){
            elem.tasks.push(newTask)
            elem.taskCounts.newTask= elem.taskCounts.newTask+1
            
        }
      })
      setUserData(data)
      console.log(data)
    
 

        setAssignTo('')
        setTaskTitle('')
        setDate('')
        setCategory('')
        setTaskDescription('')


    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded' >
            <form  onSubmit= {(e)=>{submitHandler(e)}}
            className='flex flex-wrap w-full   items-start justify-between '>
                <div className='w-1/2 '>
                <div >
                 <h3 className='text-sm text-gray-300 mb-0.5'> Task Title</h3>
                 <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='make a ui design' />
                </div>
                <div>
                  <h3>Date</h3>
                  <input value={date} onChange={(e)=>{setDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                  </div>
                <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                  <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                  </div>
               <div> 
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input  value={category}  onChange={(e)=>{setCategory(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design ,dev ,etc.' />
                </div>
                </div>
                
               <div className='w-1/2 flex flex-col items-start'> 
                 <h3 className='text-sm text-g-300 mb-0.5'>description</h3>
                 <textarea  value={taskDescription}  onChange={(e)=>{setTaskDescription(e.target.value)}} className=' w-full h-44 text-sm py-2 px-5text-sm  px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id=""></textarea>
                 
               

                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded px-5 text-sm mt-4'>Create Task</button>
                </div>
            </form>
        </div>

  )
}

export default CreateTask