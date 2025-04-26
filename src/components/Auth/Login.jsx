

import React from 'react'
import { useState } from 'react'
// import { getLocalStorage } from '../../utils/LocalStorage'

const Login = ({handleLogin}) => {

//    const data =  getLocalStorage()
//    console.log(data)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const submitHandler = (e) =>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')
    setPassword('')
    
}


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className= 'outline-none border-2 border-emerald-600 py-3 text-xl px-5 rounded-full  bg-transparent placeholder:text-gray-400' type="email" placeholder='enter your email'/>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='border-2 border-emerald-600 py-3 text-xl px-5 rounded-full outline-none bg-transparent placeholder:text-gray-400 mt-4'  type="password" placeholder='enter your password'/>
                <button className='border-none mt-5 py-3 text-xl px-5 rounded-full text-white outline-none bg-emerald-600 placeholder:text-white' >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login