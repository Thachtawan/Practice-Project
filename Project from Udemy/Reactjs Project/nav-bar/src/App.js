import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Navigation from './components/Navigation';
import Home from "./components/page/Home";
import Member from "./components/page/Member";
import AboutUs from "./components/page/AboutUs";

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/member" element={<Member/>} />
          <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
