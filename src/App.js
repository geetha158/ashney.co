
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <p className='main_urgent'>For urgent order deliveries, please message us</p>
      </div>
      {/* <Home /> */}
       <Navbar />
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
