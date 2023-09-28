import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const Header = () => {
  let {user, logoutUser} = useContext(AuthContext)
  if (user){
    var username = user.username
  }else{
    username = ""
  }
  return (
    <div>

        <Link to="/">Home</Link> | 
        {user ? 
        <>
          <Link to={`/transaction/${username}`}>Transaction</Link> 
          <Link to="/ledger/">Ledger</Link> 
          <Link to="/transfer/">Transfer</Link> 
          <Link to={`/balance/${username}`}>balance</Link> 
          <Link to="/friends/">Friends</Link> 
          <Link to={`/profile/${username}`}>{username}</Link> 
          <Link onClick={logoutUser}>Logout</Link>

        </> : 
        <>
          <Link to="/signup/"> Sign Up</Link>  
          <Link to="/login/"> Login</Link> 
        </>
        }
    </div>
  )
}

export default Header