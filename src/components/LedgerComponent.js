import React from 'react'

const LedgerComponent = ({ledger}) => {
  return (
    <div>
        <p>{ledger.sender} sent {ledger.amount}$ to {ledger.receiver}. Transaction ID: {ledger.transaction} {ledger.time}</p>
    </div>
  )
}

export default LedgerComponent
