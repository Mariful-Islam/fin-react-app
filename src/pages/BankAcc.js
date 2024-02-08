import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const BankAcc = () => {

    let username = localStorage.getItem('username')

    const navigate = useNavigate()

    let [bankAcc, setBankAcc] = useState("")

    let createBankAcc = async(e) => {
        e.preventDefault()
        let response = await fetch('http://saaddev.pythonanywhere.com/fin_api/create_bank_account/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({account_id: e.target.account_id.value, balance: e.target.balance.value, username: username})
        })
        let data = await response.json()
        setBankAcc(data)
        navigate('/profile/')
    }

    let [acc, setAcc] = useState("")

    let verifyBankAcc = async(id) => {
        let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/verify_bank_account/${id}/`)
        let data = await response.json()
        setAcc(data)
    }

    

  return (
    <div>
        <h3 style={{textAlign: 'center', marginTop:50}}>Bank Account</h3>
        <form method='POST' onSubmit={(e)=>createBankAcc(e)}>

            <input type='text' name='account_id' placeholder='account_id' 
            onChange={(e)=>verifyBankAcc(e.target.value)}/>

            <input type='text' name='tsc' className='tsc' value={acc} /> 

            
            <input type='text' name='balance' placeholder='balance' />

            <input type='submit' value='Create' />
        </form>
    </div>
  )
}

export default BankAcc