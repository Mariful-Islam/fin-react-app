import React, {useState, useEffect, useContext} from 'react'
import BankContext from '../context/BankContext'

const People = () => {

  let {bankAcc, getBankAcc} = useContext(BankContext)

  let username = localStorage.getItem('username')

  let [peoples, setPeoples] = useState([])
  
  useEffect(()=>{
    getPeoples()
  }, [])

  let getPeoples = async() => {
    let response = await fetch(`http://saaddev.pythonanywhere.com/fin_api/friends/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"username": username})
    })
    let data = await response.json()
    setPeoples(data)
    getBankAcc()
  }



  return (
    <div className='wrapper people'>
      <h3 className='text_center'>People</h3>
      <div className='people_list'>
        <div className='list_data' style={{display:'grid', gridTemplateColumns:"1fr 1fr 1fr 1fr", justifyItems: 'center', alignItems: 'center'}}>
          {peoples.map((people)=>(

          <>
          <p>{people.get_username}</p>
          <p>{people.account_id}</p>
          <p>{people.balance}$</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 14l11 -11" />
          <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg></p>
          </>
))}
        </div>
      </div>
    </div>
  )
}

export default People