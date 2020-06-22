import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Listappointment from './List/Listappointment';
import Createappointment from './Create/Createappointment';

import { useHistory } from "react-router-dom";


function Button(){
    let history = useHistory();

    function handleClick() {
        history.push("/createappointment");
    }

    return (
        <button onClick={handleClick}  type="button" class="btn btn-info mt-4 w-100">Create New Appointment</button>
    );
}

function Back(){
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <button onClick={handleClick}  type="button" class="btn btn-info mt-4 w-100">Back</button>
    );
}


class Appointment extends React.Component {
    render(){
        return (
            <div>
                <Router>
                    <div> 
                         <Switch>
                            <Route path="/createappointment">
                                <Back/>
                                <Createappointment/>
                            </Route>
                            <Route path="/">
                                <Button/>
                                <Listappointment/>
                            </Route>
                         </Switch>
                    </div>
                </Router>
            </div>
            
        )
    }
}

export default Appointment;