import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Area from './components/Area';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import PolarAreaChart from './components/PolarAreaChart';
import RadarChart from './components/RadarChart';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bar' element={<BarChart/>}/>
      <Route path='/area' element={<Area/>}/>
      <Route path='/pie' element={<PieChart/>}/>
      <Route path='/doughnut' element={<DoughnutChart/>}/>
      <Route path='/polararea' element={<PolarAreaChart/>}/>
      <Route path='/radar' element={<RadarChart/>}/>
      <Route path='/line' element={<LineChart/>}/>
    </Routes>
    </div>
  );
}

export default App;
