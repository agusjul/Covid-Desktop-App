import React, {Component} from "react";
import styles from './Update.module.css';
import DatePicker from "react-datepicker";
import { useHistory, withRouter } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';




class Updateappointment extends React.Component { 
      

      constructor(props){
          super(props)
          this.handleOptionChange = this.handleOptionChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.state = {
              nama : '',
              permintaan : 'Ingin Berdiskusi',
              tanggal: '',              
              keterangan :'',
          }

      }

      

      handleSubmit = event => {
            event.preventDefault();

            const Appointment = {
                name : this.state.nama,
                permintaan : this.state.permintaan,
                tanggal : this.state.tanggal,
                keterangan : this.state.keterangan
            }

            console.log(this.state.nama)
            // console.log(Appointment);

            axios.post('http://localhost:8000/crud', Appointment, {
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log(response)
            })

            .catch(error => {
                console.log(error)
            }
            )

            this.props.history.push('/');
            this.forceUpdate()
            
      }

      handleChange = date => {
        this.setState({
          tanggal: date
        });
      };

      handleNameChange = event =>{
          this.setState({
              nama : event.target.value
          })
      }

      handleOptionChange = event =>{
          this.setState({
              keterangan : event.target.value
          })
      }

      handlePermintaanChange = event =>{
        this.setState({
            permintaan : event.target.value
        })
    }

    render(){
        return(
            <div className={styles.container}>
                <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-12">
                    <label for="nama" class="form-label">Nama</label>
                    <input  name="nama" value={this.state.nama} onChange={this.handleNameChange}type="text" class="form-control" />
                </div>
                    <div class="col-12">
                        <label for="inputState" class="form-label">Permintaan
                        <select id="inputState" name="permintaan" class="form-select" value={this.state.permintaan} onChange={this.handlePermintaanChange}>
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
                            selected={this.state.tanggal}
                            onChange={this.handleChange}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()} name="date"
                        />                        
                    </div>
                    <div class="col-12">
                        <label for="inputketerangan" class="form-label">Keterangan</label>
                        <textarea name="keterangan"  value={this.state.keterangan} onChange={this.handleOptionChange} class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(Updateappointment);