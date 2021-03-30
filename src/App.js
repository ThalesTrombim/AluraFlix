/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
