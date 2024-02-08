import React, { useContext, useEffect, useState } from 'react'
import BankContext from '../context/BankContext'
import RevenueContext from '../context/RevenueContext'



const Transfer = () => {

  let {bankAcc, getBankAcc} = useContext(BankContext)
  let {revenue, getRevenue} = useContext(RevenueContext)

  let username = localStorage.getItem('username')

  let [acc, setAcc] = useState("")

  let findAcc = async(id) => {
    let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/find_bank_account/${id}/`)
    let data = await response.json()
    setAcc(data)
  }

  let [gasFee, setGasFee] = useState("")

  let sc = gasFee.gas_fee

  useEffect(()=>{
    getGasFee()
  }, [])

  let getGasFee = async() => {
      let response = await fetch('http://saaddev.pythonanywhere.com/fin_api/revenue/')
      let data = await response.json()
      console.log(data)
      setGasFee(data)
    }  

  let [tsc, setTsc] = useState("")

  let calSc = (amount) => {
    let total = ((amount/100)*sc).toFixed(2)
    setTsc(total)
  }

  let [success, setSuccess] = useState("")

  let onTransfer = async(e) => {
    e.preventDefault()
    let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/transfer/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({account_id: e.target.account_id.value, 
        amount: e.target.amount.value, 
        sender: username,
        tsc: tsc
      })
    })
    let data = await response.json()
    setSuccess(data)
    getBankAcc()
    getRevenue()
  }


  
  return (
    <div className='wrapper transfer'>
      <h3 style={{textAlign:'center'}}>Transfer</h3>
      {success.length===0 ? 
      <form method='POST' onSubmit={(e)=>onTransfer(e)}>
        <input type='text' name='account_id' placeholder='Account ID' onChange={(e)=>findAcc(e.target.value)}/>
        {acc.get_username ? 
        <input type='text' className='tsc' value={acc.get_username} />: <input type='text' className='tsc' value='No user found'/>}
        <input type='text' name='amount' placeholder='Amount' onChange={(e)=>calSc(e.target.value)}/>
        <input type='text' name='tsc' className='tsc' value={`${tsc}$`} />
        <input type='submit' value='Send' />
      </form>
      :
      <p>{success}</p>}
    </div>
  )
}

export default Transfer