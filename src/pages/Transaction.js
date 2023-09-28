import React, { useContext, useEffect, useState } from 'react'
import TransactionComponent from '../components/TransactionComponent'
import AuthContext from '../context/AuthContext'


const Transaction = () => {
  let [transactions, setTransactions] = useState([])

  let {user, authToken} = useContext(AuthContext)

  document.cookie = ('sender', user.username)

  useEffect(()=>{
    getTransactions()
  }, [authToken.access])
  let getTransactions = async () => {
    let response = await fetch(`/api/transactions/${user.username}`)
    let data = await response.json()
    console.log(data)
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