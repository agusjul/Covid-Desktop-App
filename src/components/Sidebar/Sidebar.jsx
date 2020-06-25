import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Sidebar.module.css';
import gambar from '../../img/coronalogo-01.png'

class SideBar extends Component {
    render() {
        return (
            <div className="position-fixed h-100 col-3 d-flex align-items-center">
                <img src={gambar} width={200} style={{position : "absolute", top : "0", marginTop : "10px"}}/>
                <nav className="nav flex-column p-3 h-80 w-100">
                    
                    <Link to="/" style={{ textDecoration: 'none' }} className="nav-link p-2 mb-4" activeclassname="navbar-active"> Dashboard</Link>
                    <Link to="/appointment" style={{ textDecoration: 'none' }} className="nav-link p-2 mb-4">Appointment</Link>
                    <Link to="/livetracker" style={{ textDecoration: 'none' }} className="nav-link p-2 mb-4">Live Tracker</Link>
                    <Link to="/pencegahan" style={{ textDecoration: 'none' }} className="nav-link p-2 mb-4">Pencegahan</Link>
                </nav>
            </div>
        )
    }
}

export default SideBar