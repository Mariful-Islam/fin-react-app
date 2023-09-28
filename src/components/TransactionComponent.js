import React from 'react'

const TransactionComponent = ({transaction}) => {
  return (
    <div>      
      {transaction.sender} sent {transaction.amount}$ to {transaction.receiver}. Transaction ID: {transaction.transaction} {transaction.time}
    </div>
  )
}

export default TransactionComponent