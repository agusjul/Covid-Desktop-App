import React, {Component} from "react";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { useHistory } from "react-router-dom";
import Updateappointment from "../Update/Updateappointment";
import styles from './Listappointment.module.css';
  
class List extends React.Component{


    state = {
        persons: [],
        no : 0
      }

      numberChange(){
          this.setState({no : this.state.no + 1})
      }
    
      async componentDidMount() {
        console.log("jalan")
        this.pahtnewData()

        await axios.get(`http://localhost:8000/crud`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
          
      }

      async pahtnewData(){
          const data = await axios.get(`http://localhost:8000/crud`)
          console.log(data);
      }

      deleteData = async (id) => {
          let Appointment = await axios.delete(`http://localhost:8000/crud/${id}`)
          this.componentDidMount();
      }

      


    render(){
        return(
            this.state.persons
            ?(
            
            <div className={styles.body}>

            <div class="card" class="w-100">
            
            </div>
                <table class="table table-borderless">
                    <thead>
                        <tr className="header">
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
                                <td>{this.numberChange} {no + 1}</td>
                                <td>{person.name}</td>
                                <td>{person.permintaan}</td>
                                <td>{person.tanggal}</td>
                                <td>{person.keterangan}</td>
                                <td>
                                    
                                    <button type="button" class="btn btn-danger btn-sm mr-2" onClick={() =>this.deleteData(person.id)}>
                                    <svg class="bi bi-trash-fill mr-2" width="15px" height="15px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg>
                                    Delete
                                    </button>

                                    <Link to={{ pathname: `/updateappointment/${person.id}`, //data: person.id,person  your data array of objects
                                    }}>
                                    <button type="button" class="btn btn-success btn-sm">
                                    <svg class="bi bi-gear-fill mr-2" width="15px" height="15px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
</svg>
                                    Edit
                                    </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                
               
            </div>) : (
                <div className={styles.body}>
                <div class="p-4 alert alert-danger">
                        <div className={styles.body2} >
                        <div>
                            <svg class="bi bi-exclamation-triangle mr-4" width="70px" height="70px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                            </svg>
                        </div>
                        <div>
                        <h3>Belum ada appointment</h3> <p>Silahkan membuat baru</p>
                        </div>
                        
                        </div>
                </div>
                </div>
                )
        )
    }
}

class AppointmentList extends React.Component {
    render(){
        return(

            <List/>
            // <Route>
            //     <Switch>
            //         <Route path="/">
            //             <List/>
            //         </Route>
            //         <Route path="/updateappointment">
            //             <Updateappointment/>
            //         </Route>
            //     </Switch>
            // </Route>
        )
    }
}

export default AppointmentList;