import React, { useEffect, useState } from 'react'
import LedgerComponent from '../components/LedgerComponent'

const Ledger = () => {
  let [ledgers, setLedger] = useState([])

  useEffect(()=>{
    getLedger()
  },[])

  let getLedger = async () => {
    let response = await fetch('/api/ledger/')
    let data = await response.json()
    setLedger(data)
  }

  return (
    <div className='ledger'>
      {ledgers.map((ledger, index)=>(
        <LedgerComponent key={index} ledger={ledger}/>
      ))}
    </div>
  )
}

export default Ledger