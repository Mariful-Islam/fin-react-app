import React, { useState, useEffect, createContext } from 'react'


let LedgerContext = createContext()
export default LedgerContext

export const LedgerProvider = ({children}) => {

  let [transactions, setTransactions] = useState([])
  
  useEffect(()=>{
    getTransactions()
  }, [])

  let getTransactions = async() => {
    let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/ledger/`)
    let data = await response.json()
    setTransactions(data)
  }

  let data = {
    transactions: transactions,
    getTransactions: getTransactions
    }

  return (
    <div>
        <LedgerContext.Provider value={data}>
            {children}
        </LedgerContext.Provider>
    </div>
  )
}
