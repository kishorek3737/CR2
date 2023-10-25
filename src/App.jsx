import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar1 from './pages/Navbar1';

const App =()=> {
  return(
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar1/>}  ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
};
    

export default App;
