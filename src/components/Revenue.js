import React from 'react'

const Revenue = ({revenue}) => {
  return (
    <div className='dash_com'>
        
       <p><h5 style={{margin:0}}>Revenue</h5><h2 style={{margin:0, padding:0}}>{revenue.revenue} $</h2></p> 
    </div>
  )
}

export default Revenue