import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FinSignUp = () => {

  let [user, setUser] = useState([])

  const navigate = useNavigate()

  let [errorMsg, setErrorMsg] = useState("")

  let onSignup = async(e) => {
    e.preventDefault()
    if (e.target.password1.value===e.target.password2.value) {
      let response = await fetch('http://saaddev.pythonanywhere.com/fin_api/signup/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({"username": e.target.username.value, 
                            "email": e.target.email.value, 
                            "password": e.target.password1.value})
      })
      let data = await response.json()
      setUser(data)

      localStorage.setItem('username', data['username'])
      localStorage.setItem('token', data['token'])

      console.log('username', data['username'], 'token', data['token'])

      navigate('/')
      window.location.reload()

    }else{
        setErrorMsg("Password Not Matched")
    }
  }

  return (
      <div className='wrapper sc'>
        <h3 style={{textAlign:'center'}}>Sign Up</h3>
        <form method='POST' onSubmit={(e)=>onSignup(e)}>
          {errorMsg}
          <input type='text' name='username' placeholder='Username' />
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='password1' placeholder='Password' />
          <input type='password' name='password2' placeholder='Confirm Password' />
          
          <input type='submit' value='Sign Up' />
        </form>
      </div>
  )
}

export default FinSignUp