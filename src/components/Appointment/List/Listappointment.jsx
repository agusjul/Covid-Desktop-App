import React, {Component} from "react";
import Updateappointment from "../Update/Updateappointment";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { useHistory } from "react-router-dom";

  


class ListAppointment extends React.Component{


    state = {
        persons: [],
        no : 0
      }

      numberChange(){
          this.setState({no : this.state.no + 1})
      }
    
      componentDidMount() {
        axios.get(`http://localhost:8000/crud`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }

      deleteData = async (id) => {
          let Appointment = await axios.delete(`http://localhost:8000/crud/${id}`)
          this.componentDidMount();
      }

      updateData = (id, val) => {
          console.log(id, val);
          //   let upAppointment = await axios.patch(`http://localhost:8000/crud/${id}`, {Appointment : val})
          this.componentDidMount();
      }

      UpdateForm() {
        let history = useHistory();
        history.push("/updateappointment");
      }


    render(){
        return(
            <Router>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Permintaan</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Keterangan</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.persons.map((person,no) =>(
                            <tr>
                                <th>{this.numberChange} {no + 1}</th>
                                <td>{person.name}</td>
                                <td>{person.permintaan}</td>
                                <td>{person.tanggal}</td>
                                <td>{person.keterangan}</td>
                                <td>
                                    
                                    <button type="button" class="btn btn-danger btn-sm mr-2" onClick={() =>this.deleteData(person.id)}>X</button>
                                   

                                    <Link to={{ pathname: "/updateappointment", data: person.id,person // your data array of objects
                                    }}>
                                    <button type="button" class="btn btn-success btn-sm" onClick={() =>this.updateData(person.id, person)}>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}



                        {/* <tr>
                            { this.state.persons.map(person => <tr key={person.id}>{person.name}</tr> )}
                        </tr>
                        <tr scope="row">
                            { this.state.persons.map(person => <tr><tr key={person.id}>{person.permintaan}</tr></tr>)}
                        </tr>
                        <td scope="row">
                            { this.state.persons.map(person => <tr><td key={person.id}>{person.tanggal}</td></tr>)}
                        </td>
                        <td scope="row">
                            { this.state.persons.map(person => <tr><td key={person.id}>{person.keterangan}</td></tr>)}
                        </td>
                        <td scope="row">
                            { this.state.persons.map(person => <tr><td key={person.id}>
                                <button type="button" class="btn btn-danger btn-sm" onClick={() =>this.deleteData(person.id)}>X</button>
                                </td></tr>)}
                        </td> */}
                    </tbody>
                </table>

                <Switch>
                    <Route path="/updateappointment">
                        <Updateappointment />
                    </Route>
                </Switch>
               
            </div>
            </Router>
        )
    }
}

export default ListAppointment;