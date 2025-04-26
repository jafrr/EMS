import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    console.log(props.changeUser)
    props.changeUser('')
    // window.location.reload()
  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br></br><span className='text-3xl font-semibold'>Jafar👋</span> </h1>
        <button onClick={logOutUser}className='bg-red-700 text-white text-lg font-medium rounded-sm px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header