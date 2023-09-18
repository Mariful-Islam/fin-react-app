import React, { useEffect, useState } from 'react'
import FriendComponent from '../components/FriendComponent'

const Friend = () => {
  let [friends, setFriends] = useState([])

  useEffect(()=>{
    getFriends()
  }, [])

  let getFriends = async () => {
    let response = await fetch('/api/friends/')
    let data = await response.json()
    setFriends(data)
  }

  return (
    <div>
      {friends.map((friend, index)=>(
        <FriendComponent key={index} friend={friend}/>
      ))}
    </div>
  )
}

export default Friend