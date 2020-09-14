import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import ReactNotification from 'react-notifications-component'
import Loading from './UI/Loading/Loading'
import './App.scss';

const Login = lazy(() => import('./Components/Login/Login'));
const Register = lazy(() => import('./Components/Register/Register'));
const ForgetPassword = lazy(() => import('./Components/ForgetPassword/ForgetPassword'));
const LoadingELement = <div className="text-center w-100"><Loading /></div>

function App() {
  return (
    <React.Fragment>
      <ReactNotification />
      <div className="d-flex align-items-center bg-auth border-top border-top-2 border-primary app">
        <Suspense fallback={LoadingELement}>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/forget" render={() => <ForgetPassword />} />
          </Switch>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
