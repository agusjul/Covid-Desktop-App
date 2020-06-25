import React, {Component} from "react";
import './Header.module.css';
import gambar from '../../../src/img/coronalogo-01.png'

class Header extends Component {
    render() {
        return (
            <div class="card border-0">
                <div class="card-body">
                    
                    <h5 class="ml-4">Aplikasi Covid-19 Data Center</h5>
                </div>
            </div>
        )
    }
}

export default Header