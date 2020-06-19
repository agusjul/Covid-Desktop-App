import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import styles from './Dashboard.module.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="w-100 h-100">
        <Carousel.Item className="w-100 h-100">
          <img fluid 
            className="d-block w-100 rounded"
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
            className="d-block w-100 rounded"
            src = {img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className="text-dark">Second slide label</h3>
            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="w-100 h-100">
          <img fluid
            className="d-block w-100 rounded"
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
  

class Dashboard extends React.Component {

    

    render(){
        return(
               <div className={styles.slideshow}>
                    <ControlledCarousel className={styles.conten}/>
               </div>
        )
    }
}

export default Dashboard;