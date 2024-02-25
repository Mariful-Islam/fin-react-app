import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



const Navbar = () => {

  const navigate = useNavigate()
  let username = localStorage.getItem('username')

    const onLogout = async() => {
      localStorage.removeItem('totalProductQuantity')
      localStorage.removeItem('totalPrice')
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      
      let response = await fetch('http://saaddev.pythonanywhere.com/fin_api/logout/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      })

      let data = response.json()
      navigate('/')
      window.location.reload()
    }
  return (
    <div className='nav_bar wrapper'>
    {username ? 
      <>
        <NavLink  to='/'>Home</NavLink>
        <NavLink to='/documentation'>Documentation</NavLink>
        <NavLink to='/transfer'>Transfer</NavLink>
        <NavLink to={`/transaction/`}>Transaction</NavLink>
        <NavLink to='/people/'>People</NavLink>
        <NavLink to={`/profile/`}>Profile</NavLink>
        <NavLink onClick={onLogout}>Logout</NavLink>
      </> :
      <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/documentation'>Documentation</NavLink>
        <NavLink to='/login/'>Login</NavLink>
        <NavLink to='/signup/'>SignUp</NavLink>
      </>}
      {username === "saad" ? 
      <NavLink to='/dashboard/'>Dashboard</NavLink>  :
      <></>
    }

    </div>
  )
}

export default Navbar