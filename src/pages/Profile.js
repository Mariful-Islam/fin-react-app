import React, { useContext, useEffect, useState } from 'react'
import user from '../icon/user.webp'
import BankContext from '../context/BankContext'
import { useNavigate } from 'react-router-dom'


const Profile = () => {

  const navigate = useNavigate()
  
  let {bankAcc, getBankAcc} = useContext(BankContext)

  useEffect(()=> {
    getBankAcc()
  }, [])

  let username = localStorage.getItem('username')

  let [info, setInfo] = useState([])
  
  useEffect(()=>{
    getInfo()
  }, [])

  let getInfo = async() => {
    let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/user_info/${username}/`)
    let  data = await response.json()
    setInfo(data)
    getBankAcc()
    
  }



  return (
    <div className='wrapper profile'>
      <img src={info.image} alt=''/>
      <h3>{username}</h3>
      { !bankAcc ? 
      <div className='profile_action'>
      <svg onClick={()=>navigate('/create_bank_account/')} xmlns="http://www.w3.org/2000/svg" id='plus_icon' viewBox="0 0 448 512">
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
      </svg>
      
      </div> :
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
        <path d="M13.5 6.5l4 4" />
      </svg>
        <p> <strong>Balance:</strong> {bankAcc.balance}$ </p>
        <p> <strong>Account ID:</strong> {bankAcc.account_id} </p>
      </div>}
    </div>
  )
}

export default Profile