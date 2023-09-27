import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'


const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
        <h2>Log In</h2>
        <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder="Username"/> <br />
            <input type="text" name="password" placeholder="Password"/> <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default LoginPage