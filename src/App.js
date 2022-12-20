import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Introduce from './Pages/Introduce/Introduce';
import Player from './Pages/Player/Player';
import Coach from './Pages/Coach/Coach';
import Schedule from './Pages/Schedule/Schedule';
import Stats from './Pages/Stats/Stats';
import Gallery from './Pages/Gallery/Gallery';
import Notice from './Pages/Notice/Notice';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact/Contact';
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
