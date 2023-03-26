import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Bar from "../components/Bar";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Bar' element={<Bar/>}/>
     </Routes>
     
    </div>
  );
}

export default App;

