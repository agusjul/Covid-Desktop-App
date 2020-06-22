import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import styles from './Dashboard.module.css';
import { fetchData } from '../../../api/index';
import Chart2 from '../Contentsdisplaydata/Chart/Chart2';

import { useHistory } from "react-router-dom";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="w-100 h-100 mb-2">
        <Carousel.Item className="w-100 h-100">
          <img 
            className=" rounded w-100 h-auto"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">First slide label</h3>
            <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="w-100 h-100">
          <img fluid
            className="rounded w-100 h-auto"
            src = {img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className="text-dark">Second slide label</h3>
            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="w-100 h-100">
          <img 
            className="rounded rounded w-100 h-auto"
            src={img3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className="text-dark">Third slide label</h3>
            <p className="text-dark">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

function Button(){
  let history = useHistory();

  function handleClick() {
    history.push("/appointment");
  }

  return (
    <button onClick={handleClick}  type="button" class="btn btn-info mt-4 w-100">Apply Now</button>
  );
}


  
class Dashboardfitur extends React.Component{

  state = {
      data : {},
      country : '',
  }

  async componentDidMount(){

      const fetchedData = await fetchData();
      this.setState({data : fetchedData});

      
  }
  

render(){
  const {data, country} = this.state;


  return(
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Request Appointment</h5>
            <p class="card-text mt-4 mb-2">
              Butuh bantuan, segera kirimkan kami kebutuhan anda
              <Button/>
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Covid Tracker</h5>
            <p class="card-text"><Chart2 data={data} country={country}/></p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Call Center</h5>
            <p class="card-text mt-4 mb-2">
              Hubungi nomor berikut untuk emergency Covid-19
            <button type="button" class="btn btn-info w-100 mt-4" >(0361) 2345645</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  }
}
  

class Dashboard extends React.Component {
    render(){
        return(
               <div>
                 <div className={styles.slideshow}>
                    <ControlledCarousel/>
                 </div>
                 <div className={styles.fitur}>
                    <Dashboardfitur/>
                 </div> 
               </div>
        )
    }
}

export default Dashboard;