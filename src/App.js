import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Main from './Pages/Main';
import reset from './styles/reset.module.css';

function App() {
  return;
  <BrowserRouter>
    <Route>
      <Main />
      <Contact />
    </Route>
  </BrowserRouter>;
}

export default App;
