import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Introduce from './Pages/Introduce';
import Player from './Pages/Player';
import Coach from './Pages/Coach';
import Schedule from './Pages/Schedule';
import Stats from './Pages/Stats';
import Gallery from './Pages/Gallery';
import Notice from './Pages/Notice';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';
import reset from './styles/reset.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Player" element={<Player />} />
        <Route path="/Coach" element={<Coach />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
