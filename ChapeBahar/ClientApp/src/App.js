import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import ReactNotification from 'react-notifications-component'
import './App.scss';

const Login = lazy(() => import('./Components/Login/Login'));
const Register = lazy(() => import('./Components/Register/Register'));

function App() {
  return (
    <React.Fragment>
      <ReactNotification />
      <div className="d-flex align-items-center bg-auth border-top border-top-2 border-primary app">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
          </Switch>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
