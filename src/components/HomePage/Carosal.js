/*eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Carousel from 'react-bootstrap/Carousel'

// services
import TopMenuDataService from "../../services/topMenu.service";
// components

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default class Carosal extends Component {

  constructor(props) {
    super(props);
    this.retrieveMenuItems = this.retrieveMenuItems.bind(this);
    
    this.state = {
        menuItems: [],
    };

    // this.toggle = this.toggle.bind(this);
    // this.loading = true;
  } 


  componentDidMount() {
    this.retrieveMenuItems();
    //this.loading = false;
  }


  retrieveMenuItems() {
    TopMenuDataService.getTopMenu()
    .then(response => {
    this.setState({
      menuItems: response.data
    });
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
  }

  render() {
    return (


                    
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/banner/banner1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/banner/banner2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/banner/banner3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    
         
    );

  }
  
}
