import React, {Component, useState} from "react";
import styles from './Update.module.css';
import DatePicker from "react-datepicker";
import { useHistory, withRouter } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';



class Updateappointment extends React.Component { 


      constructor(props){
          super(props)
          this.handleOptionChange = this.handleOptionChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.state = {
              persons : {}
          }

      }

      componentDidMount() {
        const {id} = this.props.match.params
        console.log(id);

        axios.get(`http://localhost:8000/crud/${id}`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(new Date(this.state.persons.tanggal));
          })
      }

      

      handleSubmit = event => {
            event.preventDefault();

            const Appointment = {
                name : this.state.persons.name,
                permintaan : this.state.persons.permintaan,
                tanggal : this.state.persons.tanggal,
                keterangan : this.state.persons.keterangan
            }

            console.log(this.state.nama)
            // console.log(Appointment);

            axios.put(`http://localhost:8000/crud/${this.state.persons.id}`, Appointment, {
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log(response)
                console.log("update berhasil")
            })

            .catch(error => {
                console.log(error)
                console.log("update gagal")
            }
            )
            this.props.history.push('/listappointment');
            this.forceUpdate()
            this.props.toast()
            
      }

      handleChange = date => {

        console.log(date);
        const i = date
        this.setState(prevState => ({
            persons: {                   // object that we want to update
                ...prevState.persons,    // keep all other key-value pairs
                tanggal : i       // update the value of specific key
            }
        }))
      };

      handleNameChange = event =>{
        const i = event.target.value
        this.setState(prevState => ({
            persons: {                   // object that we want to update
                ...prevState.persons,    // keep all other key-value pairs
                name: i       // update the value of specific key
            }
        }))
      }

      handleOptionChange = event =>{
        const i = event.target.value
        this.setState(prevState => ({
            persons: {                   // object that we want to update
                ...prevState.persons,    // keep all other key-value pairs
                keterangan : i       // update the value of specific key
            }
        }))
      }

      handlePermintaanChange = event =>{
        const i = event.target.value
        this.setState(prevState => ({
            persons: {                   // object that we want to update
                ...prevState.persons,    // keep all other key-value pairs
                permintaan : i       // update the value of specific key
            }
        }))
    }

    render(){
        return(
            <div className={styles.container}>
                <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-12">
                    <label for="nama" class="form-label">Nama</label>
                    <input  name="nama" value={this.state.persons.name} onChange={this.handleNameChange} type="text" class="form-control" />
                </div>
                    <div class="col-12">
                        <label for="inputState" class="form-label">Permintaan
                        <select id="inputState" name="permintaan" class="form-select" value={this.state.persons.permintaan} onChange={this.handlePermintaanChange}>
                            <option value="Ingin berdiskusi">Ingin berdiskusi</option>
                            <option value="Check up">Check up</option>
                            <option value="Memesan dokter">Memesan dokter</option>
                            <option value="Membutuhkan obat">Membutuhkan Obat</option>
                        </select>
                        </label>
                    </div> 
                    <div class="col-6">
                        <label for="inputdate" class="form-label">Tanggal</label>
                        <br/>
                        <DatePicker
                            selected= { Date.parse(this.state.persons.tanggal)}
                            onChange={this.handleChange}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()} name="date"

                        />                        
                    </div>
                    <div class="col-12">
                        <label for="inputketerangan" class="form-label">Keterangan</label>
                        <textarea name="keterangan"  value={this.state.persons.keterangan} onChange={this.handleOptionChange} class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary pl-5 pr-5">Update</button>
                    </div>
                   
                </form>
            </div>
        )
    }
}
export default withRouter(Updateappointment);