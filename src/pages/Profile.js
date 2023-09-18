import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProfileComponent from '../components/ProfileComponent'

const Profile = () => {
  let {username} = useParams()

  let [profile, setProfile] = useState([])
  useEffect(()=>{
    getProfile()
  })

  let getProfile = async () => {
    let response = await fetch(`/api/profile/${username}`)
    let data = await response.json()
    setProfile(data)
  }
  return (
    <div>      
      <ProfileComponent profile={profile}/>
    </div>
  )
}


export default Profile