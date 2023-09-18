import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  let username = 'saad'
  return (
    <div>
        <Link to="/">Home</Link> | 
        <Link to="/transaction/">Transaction</Link> | 
        <Link to="/ledger/">Ledger</Link> | 
        <Link to="/transfer/">Transfer</Link> | 
        <Link to="/balance/">balance</Link> | 
        <Link to="/friends/">Friends</Link> | 
        <Link to={`/profile/${username}`}>{username}</Link> | 
        <Link to="/sign-up/"> Sign Up</Link> | 
        <Link to="/log-in/"> Login</Link>
    </div>
  )
}

export default Header