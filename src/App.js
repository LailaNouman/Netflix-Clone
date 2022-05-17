import './App.css';
import Home from './Component/Home';
import FavList from './Component/FavList';
import NavBar from './Component/Navbar';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favMovie" element={<FavList />} />
      </Routes>

    </>
  );
}

export default App;

