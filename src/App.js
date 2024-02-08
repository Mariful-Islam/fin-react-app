import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Transaction from './pages/Transaction';
import Ledger from './pages/Ledger';
import Transfer from './pages/Transfer';
import Balance from './pages/Balance';
import Profile from './pages/Profile';
import FinSignUp from './pages/FinSignUp';
import Login from './pages/Login';
import People from './pages/People';
import Home from './pages/Home';

import { BankProvider } from './context/BankContext';
import Dashboard from './pages/Dashboard';
import { RevenueProvider } from './context/RevenueContext';
import { LedgerProvider } from './context/LedgerContext';
import BankAcc from './pages/BankAcc';
import {useEffect, useState} from "react";




function App() {

  let [gasFee, setGasFee] = useState("")

    useEffect(()=>{
        getGasFee()
    },[])

    let getGasFee = async () => {
        let res = await fetch('http://saaddev.pythonanywhere.com/fin_api/revenue/')
        let data = await res.json()
        setGasFee(data)
    }

    let [res, setRes] = useState("")

    let postGasFee = async (e) => {
        let res = await fetch('http://saaddev.pythonanywhere.com/fin_api/create_gas_fee/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({gas_fee: e.target.gas_fee.value})
        })
        let data = await res.json()
        setRes(data)
        getGasFee()
    }
  
  return (
    <div className="App">

      { gasFee.length===0 ?
          <div>
              <h3 style={{textAlign:"center"}}>Set Gas Fee</h3>
            <form onSubmit={(e)=>postGasFee(e)}>
                <p className='tsc'>{res}</p>
              <input type='text' placeholder='Gas Fee' name='gas_fee'/>
              <input type='submit' value='Set'/>
            </form>
          </div>

          :

      <div className='header'>
        <BrowserRouter>
          <BankProvider>
            <RevenueProvider>
              <LedgerProvider>
                <Header/>
                <Routes>
                  <Route Component={Home} path='/'/>               
                  <Route Component={Transaction} path='/transaction/'/>
                  <Route Component={Ledger} path='/ledger/'/>
                  <Route Component={Transfer} path='/transfer/'/>
                  <Route Component={Balance} path='/balance/'/>
                  <Route Component={People} path='/people/'/>
                  <Route Component={Profile} path='/profile/'/>
                  <Route Component={FinSignUp} path='/signup/'/>
                  <Route Component={Login} path='/login/'/>
                  <Route Component={Dashboard} path='/dashboard/'/>
                  <Route Component={Dashboard} path='/dashboard/:category/'/>
                  <Route Component={BankAcc} path='/create_bank_account/'/>
                </Routes>
              </LedgerProvider>
            </RevenueProvider>
          </BankProvider>
        </BrowserRouter>
      </div>
      }
    </div>
  );
}

export default App;
