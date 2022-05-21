import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
