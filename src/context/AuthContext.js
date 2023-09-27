import jwtDecode from 'jwt-decode'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {
  
  let [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)

  let [user, setUser] = useState(()=>localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')) : null)

  let [loading, setLoading] = useState(true)

  let navigate = useNavigate()

  let loginUser = async(e) =>{
    e.preventDefault()
    console.log('login worked')
    let response = await fetch('/api/token/',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({'username': e.target.username.value, "password": e.target.password.value})
    })
    let data = await response.json()
    console.log(response)
    console.log("data", data)
    if (response.status === 200) {
      setAuthToken(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('authToken', JSON.stringify(data))
      navigate('/')
    } else {
      alert('Something went wrong')
    }
    
  }

  let logoutUser = () =>{
    setAuthToken(null)
    setUser(null)
    localStorage.removeItem('authToken')
  }

  let updateToken = async() => {
    console.log('update method called')
    let response = await fetch('/api/token/refresh',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({'refresh': authToken.refresh})
    })
    let data = await response.json()
    if (response.status === 200){
      setAuthToken(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('authToken', JSON.stringify(data))
    }else{
      logoutUser()
    }
  }

  useEffect(()=>{
    let fourMin = 1000 * 60 * 4
    let interval = setInterval(()=>{
      if (authToken){
      updateToken()
      }
    }, fourMin)
    
    return ()=>clearInterval(interval)

  }, [authToken, loading])

  let contextData = {
    user:user,
    loginUser: loginUser,
    logoutUser: logoutUser
  }
  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

