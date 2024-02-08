import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BankContext from '../context/BankContext'


const Login = () => {

  let {bankAcc, getBankAcc} = useContext(BankContext)

  let navigate = useNavigate()

  let [errorMsg, setErrorMsg] = useState("")

  let onLogin = async(e) => {
    e.preventDefault()
    let response = await fetch('http://saaddev.pythonanywhere.com/fin_api/login/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"username": e.target.username.value,
                          "password": e.target.password.value})
    })
    let data = await response.json()
    if (data==="Invalid Credintial"){
      setErrorMsg(data)
    }else{
      localStorage.setItem('username', data['username'])
      localStorage.setItem('token', data['token'])
      console.log('username', data['username'], 'token', data['token'])
      navigate('/')
      getBankAcc()
    } 
  }

  return (
    <div className='wrapper sc'>
      <h3 style={{textAlign:'center'}}>Login</h3>
      <form method='POST' onSubmit={(e)=>onLogin(e)}>
        <p className='tsc' style={{color:'orangered'}}>{errorMsg}</p>
        <input type='text' name='username' placeholder='Username' />
        <input type='text' name='password' placeholder='Password' />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login