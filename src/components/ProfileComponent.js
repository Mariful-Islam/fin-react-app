import React from 'react'
import style from './../pages/Profile.module.css'


const ProfileComponent = ({profile}) => {
  return (
    <div className={style.profile}>

      <div className={style.profile_image}>
      <img src={profile.get_avater} alt={profile.get_username}/>
      </div>

      <div className={style.profile_name}>
       {profile.get_name}
      </div>

      <div className={style.profile_username}>
      {profile.get_username}
      </div>

      <div className={style.profile_email}>
      {profile.get_email}
      </div>
      
      <div className={style.profile_address}>
      {profile.address}
      </div>
      
      <div className={style.profile_bio}>
      {profile.bio}
      </div>   
    </div>
  )
}

export default ProfileComponent