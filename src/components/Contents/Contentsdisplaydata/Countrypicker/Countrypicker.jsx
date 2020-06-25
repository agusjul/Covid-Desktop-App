import React, {useEffect, useState} from 'react';
import {Form, Card, Button} from 'react-bootstrap';
import {fetchCountries} from '../../../../api/index';
import styles from './Countrypicker.module.css';

const Countrypicker = ({handleCountryChange}) =>{

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetcheAPI = async () =>{
            setFetchedCountries(await fetchCountries());
        }

        fetcheAPI();
    },[setFetchedCountries]);

    return(
        <div class="w-100 d-flex justify-content-center">
            <div className={styles.formpick}>
                <Card className={styles.container} border="0">
                <Card.Body>
                <Form.Group controlId="exampleForm.ControlSelect1" >
                    <Form.Control className={styles.form} as="select" onChange={(e)=> handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                    </Form.Control>
                </Form.Group>
            </Card.Body>
            </Card>
            </div>
        </div>
        
    )
}


export default Countrypicker;