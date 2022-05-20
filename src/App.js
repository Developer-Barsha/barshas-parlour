import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
 	import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Shared/Navbar';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route></Route> */}
      </Routes>
    </div>
  );
}

export default App;
