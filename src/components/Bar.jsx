import React from 'react'
import { Chart } from 'chart.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import Chart, {Chart as ChartJS,defaults} from 'react-chartjs-2';   //Add this import for chart


function Bar() {
const [chartData, setChartData]  = useState([]);

axios.get('https://api.spacexdata.com/v4/launches/')
.then((res) =>{
    let data = res.data
    console.log(data)
})
.catch((err)=>{

});
  return (
    // <Chart type='line' data={chartData} />
    <Bar/>

  )
}

export default Bar

