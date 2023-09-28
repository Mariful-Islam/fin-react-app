import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

export const Transfer = () => {
  let [transfer, setTransfer] = useState([])

  let {user} = useContext(AuthContext)

  // useEffect(()=>{
  //   getTransfer()
  // }, [])

  let getTransfer = async (e) =>{
    e.preventDefault()
    let response = await fetch('/api/transfer/',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"account_id": e.target.account_id.value, "amount": e.target.amount.value, "sender": user.username})
    })
    let data = await response.json()
    setTransfer(data)
    console.log(response)
    console.log(data)
  }
  return (
    <div>
      <h2>Transfer</h2>
      <form onSubmit={getTransfer} method='POST'>
        <input type="text" name="account_id" placeholder='Account ID'/> <br />
        <input type="text" name="amount" placeholder='Enter Amount to Send'/> <br />
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default Transfer