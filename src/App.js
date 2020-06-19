import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import LiveTracker from './components/Contents/LiveTracker';
import Dashboard from './components/Contents/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div class=" h-100 w-100">
        <div class="row h-100 w-100 m-0">
          <div class="col-3">
              <Sidebar/>
          </div>
          <div className="col-9 p-0">
              <Switch>
                 <Route exact path="/">
                    <Header/>
                    <Dashboard/>
                 </Route>
                 <Route exact path="/appointment">
                    <Header/>
                   hi
                 </Route>
                 <Route exact path="/shop">
                    <Header/>
                   Hay
                 </Route>
                 <Route exact path="/livetracker">
                    <Header/>
                   <LiveTracker/>
                 </Route>
                 <Route exact path="/pencegahan">
                    <Header/>
                   Haloo
                 </Route>
              </Switch>
          </div>     
        </div>
      </div>
    </Router>
  );
}

export default App;
