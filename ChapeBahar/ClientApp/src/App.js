import React, { useState } from 'react';
import './App.scss';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="d-flex align-items-center bg-auth border-top border-top-2 border-primary app">
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
