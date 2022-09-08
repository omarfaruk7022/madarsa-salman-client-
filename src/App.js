import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div >
    <Navbar/> 
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
