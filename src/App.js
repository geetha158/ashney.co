
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <p className='main_urgent'>For urgent order deliveries, please message us</p>
      </div>
      <Home />


      <Footer />
      
    </div>
  );
}

export default App;
