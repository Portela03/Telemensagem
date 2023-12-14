// Arquivo: App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./layout/header/Header";
import Home from './routes/Home/home';
import Aniversario from './routes/aniversarios/aniversario';
import Romanticos from './routes/romanticos/romanticos';
import Evangelico from './routes/evagelico/evangelico';
import Variedades from './routes/variadas/variedades';
import Lgbt from './routes/lgbt/lgbt';
import DataEspeciais from './routes/datasEspeciais/dataEspeciais';
import Duvidas from './routes/duvidas/duvidads';
import Contato from './routes/contato/contato';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aniversario" element={<Aniversario />} />
        <Route path="/romanticos" element={<Romanticos />} />
        <Route path="/evangelico" element={<Evangelico />} />
        <Route path="/variedades" element={<Variedades />} />
        <Route path="/lgbt" element={<Lgbt />} />
        <Route path="/datasEspeciais" element={<DataEspeciais />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default App;
