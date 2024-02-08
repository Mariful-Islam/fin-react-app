import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Revenue from '../components/Revenue'
import RevenueContext from '../context/RevenueContext'
import User from '../components/User'
import GasFee from '../components/GasFee'
import TotalTransaction from '../components/TotalTransaction'
import TotalTransferredMoney from '../components/TotalTransferredMoney'
import LedgerContext from '../context/LedgerContext'
import Ledger from '../components/Ledger'


const Dashboard = () => {

  let {revenue, getRevenue} = useContext(RevenueContext)
  let {transactions, getTransactions} = useContext(LedgerContext)

  let [users, setUsers] = useState([])

  useEffect(()=>{
    getUsers()
  }, [])

  let getUsers = async() => {
    let response = await fetch('http://saaddev.pythonanywhere.com/fin_api/all_user/')
    let data = await response.json()
    setUsers(data)
  }

  let ufg = () => {
    return(
        <GasFee/>
    )
  }

  return (
    <div className='dashboard'>
      <div className='nav_coms'>
        <div className='dash_nav'>
          <NavLink to='/dashboard/'><h5>Overview</h5></NavLink>
          <NavLink to='/dashboard/gasfee/'><h5>Gas Fee</h5></NavLink>
          <NavLink to='/dashboard/user/'><h5>User</h5></NavLink>
          <NavLink to='/dashboard/ledger/'><h5>Ledger</h5></NavLink>
          <NavLink to='/dashboard/visitor/'><h5>Visitor</h5></NavLink>
        </div>
        <div style={{display:'flex', flexDirection: 'column'}}>
          <h3 style={{textAlign:'center'}}>Dashboard</h3>
          <div className='dash_com'>
            <Revenue revenue={revenue}/>
            <User users={users}/>
            <TotalTransaction transactions={transactions}/>
            <TotalTransferredMoney transactions={transactions}/>
          </div>
          <div>
            <Ledger transactions={transactions}/>
          </div>
          <div>
            <GasFee/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard