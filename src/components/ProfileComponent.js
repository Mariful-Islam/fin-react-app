import React from 'react'

const ProfileComponent = ({profile}) => {
  return (
    <div>
        <h1>
          {profile.get_name} <br />
          {profile.get_username} <br />
          {profile.get_email} <br />
          {profile.get_avater} <br />
          {profile.address} <br />
          {profile.bio}
        </h1>
    </div>
  )
}

export default ProfileComponent