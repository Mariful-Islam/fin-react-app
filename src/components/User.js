import React from 'react'

const User = ({users}) => {
  return (
    <div className='dash_com'>
        <p><h5 style={{margin:0}}>Users</h5><h2 style={{margin:0, padding:0}}>{users.length}</h2></p>
    </div>
  )
}

export default User