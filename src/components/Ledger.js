import React from 'react'

const Ledger = ({transactions}) => {
  return (
    <div className='transaction' style={{margin:0}}>
      <h4 className='text_center' style={{margin:0, marginBottom: 10}}>Ledger</h4>
      <div className='tran_header' style={{display:'grid', gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", justifyItems: 'center', alignItems: 'center'}}>
        <h5>Sender</h5>
        <h5>Receiver</h5>
        <h5>Transaction ID</h5>
        <h5>Amount</h5>
        <h5>Time</h5>
      </div>
      <div className='tran_data' style={{display:'grid', 
                  gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", 
                  justifyItems: 'center', 
                  alignItems: 'center',
                  fontSize: '0.8rem',
                  height: 150,
                  overflowY: 'auto'
                  }}>
        {transactions.map((transaction)=>(
          <>
            <p>{transaction.sender}</p>
            <p>{transaction.receiver}</p>
            <p>{transaction.transaction_id}</p>
            <p>{transaction.amount} $</p>
            <p>{transaction.get_date}<br/>{transaction.get_time}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default Ledger