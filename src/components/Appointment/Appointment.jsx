import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Listappointment from './List/Listappointment';
import Createappointment from './Create/Createappointment';
import Updateappointment from './Update/Updateappointment';
import styles from './Appointment.module.css';
import DatePicker from "react-datepicker";

import { useHistory } from "react-router-dom";


function Button(){
    let history = useHistory();

    function handleClick() {
        history.push("/createappointment");
    }
    function tanggal(){

        return {__html: new Date().toDateString()};
    }

    return (
        <div className={styles.component}>
        <div className={styles.header}>
            <div className={styles.item}>  
                <h5 class="m-0">Appointment List</h5>
                <p class="m-0 text-muted font-weight-lighter">Last update <span dangerouslySetInnerHTML={tanggal()}/></p>
            </div> 
           
        <button onClick={handleClick}  type="button" class="btn btn-info w-10">
            <svg class="bi bi-plus-square-fill mr-2" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
        </svg>
        Create New Appointment</button>
            
        </div>
        </div>
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
                            <Route path="/updateappointment/:id">
                                <Updateappointment/>
                            </Route>
                            <Route path="/createappointment">
                                <Back/>
                                <Createappointment/>
                            </Route>
                            <Route path="/">
                                <div className={styles.body}>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <Button/>
                                        </li>
                                        <li class="list-group-item">
                                            <Listappointment/>
                                        </li>
                                    </ul>
                                </div>
                            </Route>
                         </Switch>
                    </div>
                </Router>
            </div>
            
        )
    }
}

export default Appointment;