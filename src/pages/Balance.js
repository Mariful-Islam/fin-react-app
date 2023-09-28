import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BalanceComponent from "../components/BalanceComponent"


const Balance = () => {
  let {username} = useParams()
  let [balance, setBalance] = useState([])

  useEffect(()=>{
    getBalance()
  },[])

  let getBalance = async()=>{
    let response = await fetch(`/api/balance/${username}`)
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