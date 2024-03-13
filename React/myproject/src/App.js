import Home from "./pages/Home";
import Kurser from "./pages/Kurser";
import Class from "./pages/Class";
import Extra from "./pages/Extra";
import Biologi1 from "./pages/Biologi1";
import Cellbiology from "./pages/Cellbiology";

import Header from "./components/Header";
import Footer from "./components/Footer"


import "./App.css";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return ( <div> 
    <Router>
      <Header />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Kurser" element={<Kurser />} />
          <Route path="/Biologi1" element={<Biologi1 />} />
          <Route path="/Cellbiology" element={<Cellbiology />} />
          <Route path="/Class" element={<Class />} />
          <Route path="/Extra" element={<Extra />} />
        </Routes>
      <Footer />
    </Router>
    </div> )
}

export default App
