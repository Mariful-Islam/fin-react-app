import React, { useEffect, useState } from 'react'
import TransactionComponent from '../components/TransactionComponent'


const Transaction = () => {
  let [transactions, setTransactions] = useState([])

  useEffect(()=>{
    getTransactions()
  }, [])
  let getTransactions = async () => {
    let response = await fetch('/api/transactions/')
    let data = await response.json()
    setTransactions(data)
  }

  return (
    <div>
      {transactions.map((transaction, index) => (
        <TransactionComponent key={index} transaction={transaction} />
      ))}
    </div>
  )
}

export default Transaction