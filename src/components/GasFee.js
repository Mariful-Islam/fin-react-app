import React, {useEffect, useState} from 'react'

const GasFee = () => {

    let [gasFee, setGasFee] = useState("")

    useEffect(()=>{
        getGasFee()
    }, [])

    let getGasFee = async () => {
        let res = await fetch('http://saaddev.pythonanywhere.com/fin_api/revenue/')
        let data = await res.json()
        setGasFee(data)
    }

    let [rsp, setRsp] = useState("")

    let gasFeeUpdate = async (e) => {
        let res = await fetch('http://saaddev.pythonanywhere.com/fin_api/update_gas_fee/')
        let data = await res.json()
        setRsp(data)
    }

    let updateGasFee = () => {
        
    }

  return (
    <div className=''>
        <h4>Current Gas Fee: {gasFee.gas_fee} </h4>
        <input type='submit' value='Update' onClick={updateGasFee}/>
        <div style={{display: 'none'}}>
            {rsp ?
                <p className='tsc'>{rsp}</p> :
                <form onSubmit={(e)=>gasFeeUpdate(e)}>
                    <input type='text' placeholder='gas fee' name='gas_fee'/>
                    <input type='submit' value='Update'/>
                </form>
            }
        </div>
    </div>
  )
}

export default GasFee