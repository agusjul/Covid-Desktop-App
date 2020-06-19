import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) =>{

    if(!confirmed){
        return 'Loading...'
    }
    console.log(Cards);

    return(
        <div className = {styles.container}>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100"  className= {styles.confirmed}>
                <div class="card-body">
                    <p class="card-title">Confirmed</p>
                    <h2 class="card-text"><CountUp start={0} end={confirmed.value} duration={1.5} separator="." /></h2>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100" className= {styles.recovered}>
                <div class="card-body">
                    <p class="card-title">Recovered</p>
                    <h2 class="card-text"><CountUp start={0} end={recovered.value} duration={1.5} separator="." /></h2>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100" className= {styles.deaths}>
                <div class="card-body">
                    <p class="card-title">Deaths</p>
                    <h2 class="card-text"><CountUp start={0} end={deaths.value} duration={1.5} separator="." /></h2>
                </div>
                </div>
            </div>
        </div>


        {/* <small className="text-light">Last updated {new Date(lastUpdate).toLocaleDateString('en-US', options)}</small> */}
        </div>
    )
}



export default Cards;