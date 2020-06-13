import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navigation from "./components/shared/Navigation";
import GuestNav from "./components/shared/GuestNav";
import HomePage from './components/HomePage';
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import MyPackages from "./components/packages/MyPackages";
import RegPackage from "./components/packages/RegPackage";
import UpdateMyPackage from "./components/packages/UpdateMyPackage";
import FooterHandler from "./components/shared/Footer";

function App(props) {

  let [loggedNavStatus, setLoggedNavStatus] = useState('user');

  useEffect(() => {

    if (window.location.href.match(/login.*/)) {
      setLoggedNavStatus('guest');
    } else if (window.location.href.match(/register.*/)) {
      setLoggedNavStatus('guest');
    }

  },[]);

  const validateLogin = (component) => {
    if (component === "/") {
      setLoggedNavStatus('guest');
      return <HomePage/>
    } else if(localStorage.getItem('user-role') === 'user'){
      setLoggedNavStatus('user');
      return <HomePage/>
    } else {
      alert("No user logged in yet.!");
    }

  };

  return (
    <div className="App">

      {(
          <div>
            <Router>
              {
                loggedNavStatus === 'guest' ? <GuestNav /> : <Navigation />
              }
              <div>
                <Switch>
                  <Route exact path="/" component={() => validateLogin("/")} />
                  <Route exact path="/home" component={() => validateLogin("/home")}/>
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/mypackages" component= {MyPackages} />
                  <Route path="/package/upload" component= {RegPackage} />
                  <Route path="/package/edit/:id" component= {UpdateMyPackage} />
                </Switch>
              </div>
            </Router>
            <div>
              <FooterHandler/>
            </div>
          </div>
      )}

    </div>
  );
}

export default App;
