import React from 'react'
import { useNavigate } from 'react-router-dom'
import left from '../icon/left.svg'



const Home = () => {

  const navigate = useNavigate()

  let username = localStorage.getItem('username')


  return (
    <div className='fin_home wrapper'>
      <h4 style={{textAlign:'center'}}> Fin Digital Banking System</h4>
      <div style={{justifyItems:'center', alignItems: 'center', textAlign: 'center'}}>
        <p> Connect to secure banking system  
          <br/> <br/> <br/>
          {username ? 
          <strong onClick={()=>navigate('/transfer/')} style={{cursor: 'pointer'}}>
          
            <img src={left} alt='' />
          </strong>
          :
          <strong onClick={()=>navigate('/signup/')} style={{cursor: 'pointer'}}>
          
            <img src={left} alt='' />
          </strong>}
          </p>
      </div>
    </div>
  )
}

export default Home