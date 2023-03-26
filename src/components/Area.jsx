import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler} from 'chart.js';
import { Line } from 'react-chartjs-2';



//   Area Graph

function Area() {



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [70, 2, 15, 50, 56, 55, 40],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  
        
    return (
      <Line options={options} data={data} />
    )
  }
  
  export default Area