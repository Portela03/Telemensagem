import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Aniversario from "./routes/Aniversarios/Aniversario";

import Evangelico from "./routes/evagelico/evangelico";
import Variedades from "./routes/variedades/variedades";
import Lgbt from "./routes/lgbt/lgbt";
import DataEspeciais from "./routes/datasEspeciais/dataEspeciais";
import Duvidas from "./routes/duvidas/duvidas";
import Contato from "./routes/contato/contato";
import Banner from "./layout/Banner/Banner";
import Header from "./layout/Header/Header";

import Footer from "./layout/Footer/Footer";
import Romanticos from "./routes/romanticos/romanticos";

const App: React.FC = () => {
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aniversario" element={<Aniversario />} />
        <Route path="/romanticas" element={<Romanticos />} />
        <Route path="/evangelicas" element={<Evangelico />} />
        <Route path="/variadas" element={<Variedades />} />
        <Route path="/lgbt" element={<Lgbt />} />
        <Route path="/datasespeciais" element={<DataEspeciais />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
