import React, {useState, useEffect} from 'react'

const Transaction = () => {

  let username = localStorage.getItem('username')

  let [transactions, setTransactions] = useState([])
  
  useEffect(()=>{
    getTransactions()
  }, [])

  let getTransactions = async() => {
    let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/transaction/${username}`)
    let data = await response.json()
    setTransactions(data)
  }

  return (
    <div className='wrapper transaction'>
      <h3 className='text_center' style={{margin:0, marginBottom: 10}}>Transaction</h3>
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
                  height: 300,
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

export default Transaction