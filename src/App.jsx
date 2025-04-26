import React, { useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import ExmployeeDashboard from './components/Dashboard/ExmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

 const [user, setUser] = useState(null) 
 const [loggedInuserData, setLoggedInuserData] = useState(null)
 const [userData,setUserData]= useContext(AuthContext)


 useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInuserData(userData.data)
     }
   },[]);
 

const handleLogin =(email,password)=>{
  if(email =='admin@me.com' && password =='123'){
    setUser('admin')
    localStorage.setItem('loggedInUser' ,JSON.stringify({role:'admin'}))
  
  }else if(userData){
    const employee = userData.find((e)=>email==e.email && e.password==password)
    if(employee){
      setUser('employee')
      setLoggedInuserData(employee)
      localStorage.setItem('loggedInUser' ,JSON.stringify({role:'employee',data:employee}))
    }

  }
  
  else{
    alert("Invalid Credentials")
  }

}



  return (
   <>
   {!user ? <Login  handleLogin={handleLogin}/> : ''}
   {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user=='employee'?<ExmployeeDashboard  changeUser={setUser} data={loggedInuserData}/>:null)}
   </>
  )
}

export default App