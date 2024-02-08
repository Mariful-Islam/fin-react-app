import React, { createContext, useState, useEffect } from 'react'



let RevenueContext = createContext()
export default RevenueContext


export const RevenueProvider = ({children}) => {
    let [revenue, setRevenue] = useState("")

    useEffect(()=>{
      getRevenue() 
    }, [])
  
    let getRevenue = async() => {
      let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/revenue/`)
      let data = await response.json()
      setRevenue(data)
    }

    let data = {
        revenue: revenue,
        getRevenue: getRevenue
    }

  return (
    <div>
        <RevenueContext.Provider value={data}>
            {children}
        </RevenueContext.Provider>
    </div>
  )
}

