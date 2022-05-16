import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Home/>

    </>
  );
}

export default App;

