import React, { useEffect, useState } from 'react'

export const Transfer = () => {
  let [transfer, setTransfer] = useState([])

  useEffect(()=>{
    getTransfer()
  }, [])

  let getTransfer = async () =>{
    let response = await fetch('api/transfer/')
    let data = await response.json()
    setTransfer(data)
  }
  return (
    <div>
      <h2>Transfer</h2>
      <form method='post'>
        <input type="text" name="account_id" placeholder='Account ID'/> <br />
        <input type="text" name="amount" placeholder='Enter Amount to Send'/> <br />
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default Transfer