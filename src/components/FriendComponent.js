import React from 'react'

const FriendComponent = ({friend}) => {
  return (
    <div>
        <p>{friend.get_username} {friend.account_id} {friend.balance}$</p>
    </div>
  )
}

export default FriendComponent