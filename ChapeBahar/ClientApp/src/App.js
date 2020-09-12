import React from 'react';
import './App.scss';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="d-flex align-items-center bg-auth border-top border-top-3 border-primary vh-100">
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
