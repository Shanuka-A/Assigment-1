import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
