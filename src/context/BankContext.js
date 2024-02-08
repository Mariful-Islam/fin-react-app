import React, { createContext, useEffect, useState } from 'react'

let BankContext = createContext()
export default BankContext

export const BankProvider = ({children}) => {

    let username = localStorage.getItem('username')

    let [bankAcc, setBankAcc] = useState("")

    useEffect(()=>{
        getBankAcc()
    }, [])

    let getBankAcc = async() => {
        let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/get_bank_account/${username}/`)
        let data = await response.json()
        setBankAcc(data)
    }

    let data = {
        bankAcc: bankAcc,
        setBankAcc: setBankAcc,
        getBankAcc: getBankAcc
    }

    return (
    <div>
        <BankContext.Provider value={data}>
            {children}
        </BankContext.Provider>
    </div>
  )
}
