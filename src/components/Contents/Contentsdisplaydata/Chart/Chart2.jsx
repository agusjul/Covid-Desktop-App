import React, {useState, useEffect} from 'react';
import {fetchData} from '../../../../api/';
import {Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart2 = ({data : {confirmed,recovered, deaths}, country}) =>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () =>{
            setDailyData(await fetchData());
        }

        fetchAPI();
    },[]);

    const barChart = (
        confirmed
        ? (
           




// batas disini

            <Bar
            data={{
                labels: ['infected', 'Recovered', 'Deaths'],
                datasets : [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(255,182,77,1)',
                        'rgba(64,153,255,1)',
                        'rgba(255,83,112,1)',
                    ],
                    data: [
                        confirmed.value, recovered.value, deaths.value
                    ],
                   
                    
                }]

            }}

            options ={{
                legend: {display:false},
                scales: {
                    xAxes: [{
                        
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        display :false,
                        gridLines: {
                            display:false
                        }   
                    }]
                }
            }}
            
            />
        ) :null
    )
    
    return(
        <div className={styles.container}>
            <div className={styles.card}>
               {barChart}
            </div>
        </div>

    )
}


export default Chart2;