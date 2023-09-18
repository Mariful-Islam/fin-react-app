import React from 'react'

export const Transfer = () => {
  return (
    <div>
      <h2>Transfer</h2>
      <form>
        <input type="text" name="account_id" placeholder='Account ID'/> <br />
        <input type="text" name="amount" placeholder='Enter Amount to Send'/> <br />
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default Transfer