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
import {Toast} from 'react-bootstrap';
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
        <div className={styles.back}>
            <button onClick={handleClick}  type="button" class="btn btn-secondary w-100">Back</button>
        </div>
        
    );
}


class Appointment extends React.Component {

    state = {
        tampil :false,
        tampil2 :false
    }

    handleTampil = () =>{
        this.setState({tampil : true})
    }
    handleTutup = () =>{
        this.setState({tampil : false})
    }
    handleTampil2 = () =>{
        this.setState({tampil2 : true})
    }
    handleTutup2 = () =>{
        this.setState({tampil2 : false})
    }

    render(){
        return (
            <div>
                {console.log("disini")}
                <div aria-live="polite" aria-atomic="true" style={{position: "relative"}} >
                    <Toast show={this.state.tampil2} onClose={this.handleTutup2} className={styles.notif} delay={2000} autohide>
                    <Toast.Header>
                        <strong className="mr-auto">Sistem</strong>
                    </Toast.Header>
                    <Toast.Body>Berhasil menambahkan data</Toast.Body>
                    </Toast>
                </div>
                <div aria-live="polite" aria-atomic="true" style={{position: "relative"}} >
                    <Toast show={this.state.tampil} onClose={this.handleTutup} className={styles.notif} delay={2000} autohide>
                    <Toast.Header>
                        <strong className="mr-auto">Sistem</strong>
                    </Toast.Header>
                    <Toast.Body>Berhasil mengupdate data</Toast.Body>
                    </Toast>
                </div>
                <Router>
                    <div> 
                         <Switch>                             
                            <Route path="/updateappointment/:id">
                                <Updateappointment toast = {this.handleTampil}/>
                                <Back/>
                            </Route>
                            <Route path="/createappointment">
                               
                                <Createappointment toast = {this.handleTampil2}/>
                                <Back/>
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