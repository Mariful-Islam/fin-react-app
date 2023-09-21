import React, { useEffect, useState } from 'react'
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
  return (
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
  )

}
export default Body