import React, {Component, useState} from "react";
import axios from 'axios';
import {Modal, Button, Toast} from 'react-bootstrap';
import styles from './Modalcom.module.css'

function Modalcom(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    


    const deleteData = async () => {
        try {
            await axios.delete(`http://localhost:8000/crud/${props.person.id}`)
            handleClose()
            props.komponen()
            props.toast()
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <span>
           
             <button type="button" class="btn btn-danger btn-sm mr-2" onClick={handleShow}>
                                    
            <svg class="bi bi-trash-fill mr-2" width="15px" height="15px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                </svg>
            Delete
            </button>
            
        
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Konfirmasi Hapus 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <p>
                            Yakin untuk menghapus data {props.person.name} ?
                        </p>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={deleteData} variant="danger">Delete</Button>
                    <Button onClick={handleClose} variant= "secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </span>
        )
}


export default Modalcom