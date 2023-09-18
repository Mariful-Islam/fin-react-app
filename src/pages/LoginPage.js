import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <h2>Log In</h2>
        <form>
            <input type="text" name="username" placeholder="Username"/> <br />
            <input type="text" name="password" placeholder="Password"/> <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default LoginPage