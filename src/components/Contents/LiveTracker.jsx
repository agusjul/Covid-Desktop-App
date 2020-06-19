import React from 'react';

import {Cards, Chart, Countrypicker} from './Contentsdisplaydata';
import styles from './LiveTracker.module.css';
import { fetchData } from '../../api/index';

class LiveTracker extends React.Component{

    state = {
        data : {},
        country : '',
    }

    async componentDidMount(){

        const fetchedData = await fetchData();
        this.setState({data : fetchedData});

        
    }

    handleCountryChange  = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data:fetchedData, country : country});
    }

    render(){

        const {data, country} = this.state;
        return(
            <div className={styles.container}>
                <Countrypicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}


export default LiveTracker;