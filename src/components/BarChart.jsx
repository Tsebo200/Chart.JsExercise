import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';


function BarChart() {
// const [height, setHeight] = useState([])

axios.get('https://www.balldontlie.io/api/v1/players')
.then((res) => {
  let data = res.data.data
  for(let i = 0; data.length; i++){
    console.log(data)
  }
})
.catch((err) => {
  console.log(err)
})

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:  [70, 2, 15, 50, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [65, 59, 80, 81, 56, 55, 40],

        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // backgroundColor: 'rgba(255, 99, 132, 0.2)',
        // backgroundColor: 'rgba(255, 159, 64, 0.2)',
        // backgroundColor: 'rgba(255, 205, 86, 0.2)',
        // backgroundColor: 'rgba(75, 192, 192, 0.2)',
        // backgroundColor: 'rgba(54, 162, 235, 0.2)',
        // backgroundColor: 'rgba(153, 102, 255, 0.2)',
        // backgroundColor: 'rgba(201, 203, 207, 0.2)'
      },
    ],
  };
  


  return (
    <Bar options={options} data={data}/>
  )
}

export default BarChart