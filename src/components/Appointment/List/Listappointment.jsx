import React, {Component} from "react";

import axios from 'axios';

class ListAppointment extends React.Component{


    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:8000/crud`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(this.state);
          })
      }


    render(){
        return(
            <div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Nama</th>
                        <th scope="col">Permintaan</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">
                            { this.state.persons.map(person => <tr><td>{person.name}</td></tr>)}
                        </td>
                        <td scope="row">
                            { this.state.persons.map(person => <tr><td>{person.permintaan}</td></tr>)}
                        </td>
                        <td scope="row">
                            { this.state.persons.map(person => <tr><td>{person.tanggal}</td></tr>)}
                        </td>
                        <td scope="row">
                            { this.state.persons.map(person => <tr><td>{person.keterangan}</td></tr>)}
                        </td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
        )
    }
}

export default ListAppointment;