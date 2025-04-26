import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {


     const [userData,setUserData] = useContext(AuthContext)
     
  return (

    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='flex justify-between rounded bg-red-400 mb-2  py-2 px-4'>
        <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5  '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5  '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5  '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5  '>Failed</h5>
    </div>

<div className='h-[80%] '>

    
{userData.map(function(elem,idx){
            return <div  key={idx} className='flex justify-between bg-transparent mb-2  py-2 px-4 border-emerald-600 border-2
             rounded'>
            <h2 className='text-lg font-medium w-1/5 text-white '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600 '>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400 '>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white '>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400 '>{elem.taskCounts.failed}</h5>
        </div>
        })}
</div>

        
        
    </div>
  )
}

export default AllTask