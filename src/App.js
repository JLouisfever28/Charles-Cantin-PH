import React from "react";
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Galerie from "./Pages/Galerie";
import TarifsPrestations from "./Pages/TarifsPrestations";



function App() {
  return(
<Router>
      <Header />
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Galerie" element={<Galerie />} />
        <Route path="/TarifsPrestations" element={<TarifsPrestations />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
