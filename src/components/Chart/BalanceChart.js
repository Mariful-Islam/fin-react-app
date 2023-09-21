import { Chart as ChartJS, registerables } from 'chart.js';
import React, { useRef } from 'react';
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';
ChartJS.register(...registerables);

const BalanceChart = ({users}) => {
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  }
  let data = {
    labels: users.map((user)=>(user.get_username)),
    datasets: [{
      label: "User balance", 
      data: users.map((user)=>(user.balance)),
      backgroundColor: [
        'red',
        'green',
        'blue',
        'cyan',
      ]
  }]
  }
  return (
    <div>
      <Bar ref={chartRef} data={data} onClick={onClick} />
    </div>
  )
}

export default BalanceChart



