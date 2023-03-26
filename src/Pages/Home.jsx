import React from 'react';
// import {View} from 'react-native';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Main.css'
import '../components/BarChart'
import BarChart from '../components/BarChart';
import Area from '../components/Area';
import PieChart from '../components/PieChart';
import DoughnutChart from '../components/DoughnutChart';
import PolarAreaChart from '../components/PolarAreaChart';
import RadarChart from '../components/RadarChart';



function Home() {
  return (
    // <View>
    <div className='main-container'>
   
    <div className='chart'>
    <BarChart />
    </div>

    <div className='chart'>
    <PieChart />
    </div>

    <div className='chart'>
    <Area />
    </div>

    <div className='chart'>
    <DoughnutChart/>
    </div>

    <div className='chart'>
    <PolarAreaChart/>
    </div>

    <div className='chart'>
    <RadarChart/>
    </div>


    </div>
    // </View>
  );
}

export default Home