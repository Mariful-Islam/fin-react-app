import React, { useEffect, useState } from "react"
import BalanceComponent from "../components/BalanceComponent"


const Balance = () => {
  let [balance, setBalance] = useState([])

  useEffect(()=>{
    getBalance()
  },[])

  let getBalance = async()=>{
    let response = await fetch('/api/balance/')
    let data = await (response.json())
    setBalance(data)
  }
  
  return (
    <div className="balance">
      <BalanceComponent balance={balance}/>
    </div>
    
  )
}

export default Balance