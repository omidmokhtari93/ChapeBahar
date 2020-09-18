import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import ReactNotification from 'react-notifications-component'
import Loading from './UI/PageLoading/PageLoading'
import './App.scss';
import Main from './Components/Main/Main';
import Layout from './Components/AppLayout/AppLayout';

const Login = lazy(() => import('./Components/Login/Login'));
const Register = lazy(() => import('./Components/Register/Register'));
const ForgetPassword = lazy(() => import('./Components/ForgetPassword/ForgetPassword'));
const LoadingELement = <div className="text-center w-100"><Loading /></div>

function App() {
  return (
    <React.Fragment>
      <ReactNotification />
      <Layout>
        <Suspense fallback={LoadingELement}>
          <Switch>
            <Route path="/" exact render={() => <Main />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/forget" render={() => <ForgetPassword />} />
          </Switch>
        </Suspense>
      </Layout>
    </React.Fragment>
  );
}

export default App;
