import React, { useContext } from 'react'

const TotalTransaction = ({transactions}) => {


  return (
    <div className='dash_com'>
       <p><h5 style={{margin:0}}>Total Transaction</h5><h2 style={{margin:0, padding:0}}>{transactions.length}</h2></p> 
    </div>
  )
}

export default TotalTransaction