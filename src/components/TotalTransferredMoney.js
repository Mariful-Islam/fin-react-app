import React from 'react'

const TotalTransferredMoney = ({transactions}) => {

    let total = 0
    transactions.map((transaction)=> total += transaction.amount)

  return (
    <div className='dash_com'>
        <p><h5 style={{margin:0}}>Total Transferred Money</h5><h2 style={{margin:0, padding:0}}>{total} $</h2></p>
    </div>
  )
}

export default TotalTransferredMoney