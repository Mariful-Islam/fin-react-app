import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import BalanceChart from '../Chart/BalanceChart'
import style from './Body.module.css'


const Body = () => {
  let [friends, setFriends] = useState([])

  useEffect(()=>{
    getFriends()
  }, [])

  let getFriends = async () => {
    let response = await fetch('/api/friends/')
    let data = await response.json()
    setFriends(data)
  }

  let [users, setUsers] = useState([])
  useEffect(()=>{
    getUsers()
  })
  let getUsers =()=>{
    setUsers(friends)
  }

  let {user, logoutUser} = useContext(AuthContext)


  // console.log(name)
  return (
    <div>
      {user ? (
        <p onClick={logoutUser} >Logout</p>
      ) : (
        <Link to="log-in"/>
      )}
      {user ? <p>Welcome : <b>{user.username}</b></p> : <p>Anonymous</p>} 
      {user ? 
      <>
        <div className={style.chart}>
          <div>
            <BalanceChart users={users}/>
          </div>
          <div>
            transaction rate
          </div>
          <div>
            revenue
          </div>
          <div>
            ndsuhcuw
          </div>
        </div>
      </>  : <h1>DIgital Banking System FIN</h1>}
      
    </div>
  )

}
export default Body