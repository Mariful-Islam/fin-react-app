import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let [signup, setSignup] = useState([])

  let navigate = useNavigate()
  
  let getSignUp = async (e) => {
    e.preventDefault()

    let response = await fetch('/api/signup/',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({'name': e.target.name.value, 'username': e.target.username.value, 'email': e.target.email.value, 'avater': e.target.avater.files})
    })
    let data = await response.json()
    console.log(data)
    console.log(response)
    console.log(e.target.avater.files)
    
    setSignup(data)

  }
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={getSignUp} method='POST' encType='multipart/form-data'>
        <input type='text' name='name' placeholder='Name'/> <br />
        <input type='text' name='username' placeholder='Username'/> <br />
        <input type='text' name='email' placeholder='Email'/> <br />
        <input type='file' accept='image/*' name='avater'/> <br />
        <input type='password' name='password1' placeholder='Password'/> <br />
        <input type='password' name='password2' placeholder='Confirm password'/> <br />
        <input type='submit' value="Submit"/>
      </form>
    </div>
  )
}

export default SignUp
