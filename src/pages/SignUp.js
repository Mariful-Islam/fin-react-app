import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type='text' name='name' placeholder='Name'/> <br />
        <input type='text' name='username' placeholder='Username'/> <br />
        <input type='text' name='email' placeholder='Email'/> <br />
        <input type='file' name='avater' alt='avater'/> <br />
        <input type='password' name='password1' placeholder='Password'/> <br />
        <input type='password' name='password2' placeholder='Confirm password'/> <br />
        <input type='submit'/>
      </form>
    </div>
  )
}

export default SignUp
