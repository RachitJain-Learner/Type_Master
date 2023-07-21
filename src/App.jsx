import Multiplayer from "./pages/Multiplayer";
import Navbar from "./components/Navbar";
import Solo from "./pages/Solo";
import Home from './pages/Home'
import { Routes,Route } from "react-router-dom";

const App = () => {


  return <div className="w-full h-[100vh]">
  <div className="w-full h-12">
    <Navbar/>
  </div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Solo" element={<Solo/>}/>
    <Route path="/Multiplayer" element={<Multiplayer/>}/>
  </Routes>
  </div>;
};

export default App;
