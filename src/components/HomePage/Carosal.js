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
          src="https://previews.dropbox.com/p/thumb/ABWmS_Y5EyABCu9FT88p7AVaoTkaFnIcqN2DAqwmpM0DsgvOqWeBJAOCkthDqE5JcuBa2HxAwUSl2VidNyYIe6O98_o3v3FiBUxGbIZmmDq6jOqgXkY-7AROB2QfT-PiS1AX4zDTLrgBg26xEAQNQqnu13JocEKEwJVoSmHKpjp3BCZEPYBaLXIjClCrIdENciqoPgKtTNalsBZC_05H2LF2Ga3rnFcHBnTFHRTE8rVPHO1cSi4y0Q-aGu-fw4S5EXk3mZfOicF24E_n79jnIMpwZTmfK62lySD2IkkPMzEoanuje7r5y4iTmnx_FAsQbfsLZ4QgU5K95PMmjyabOgDqxgP18Vdm1lM6xxHyhnIU1A/p.jpeg?fv_content=true&size_mode=5"
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
          src="https://previews.dropbox.com/p/thumb/ABUm-YTYSG-J72MG5F4V14c7SBKynk5nhoPd_yOCikWpZWzBmxlkDhhntAkQC1HTBN4j2B3WXE3ddrqXBCh9KLpQO8NGPsyFpZhK9XXNRbrN2fEJDhaHP_1f9K_Mb-cQ4-qNNIp0FAlt6osNQklLZVpQYxqWw6ay_Fs30drhQFW22EiEo1B1rXnuasDQ0PlTZVhK-Oy-d3Y4E8fE0gkJzel93P18oCH0vnnjo5am880UJxvai0CKhzrXj2-A8cW9lZoiQ7PiKvHjXjoS9nW5sAjC6GWohLxvi85nu3HUetyNirQ6pVxIrN7k07HYwnoXKeOSKeDwoQJGCX2ocA-QIX179YVhnbiqFIVkgLoV5si5hw/p.jpeg?size=2048x1536&size_mode=3"
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
          src="https://previews.dropbox.com/p/thumb/ABWNVI-p0_m2M7Nx_lQtvc-zxcYJd81G8v2jr0MlwSlWR8943Ot2kyI6jTlE04HyHCJLo9PZcADb5Bs1C6kYp1cQCiBzoA8oE1aZYIRZBUkZclgUhbIXNDWtC0ieKuCoDmcsqpby0wFxjxemRs0t9ZPqvtWfdwGfkJ5A1qN4t5C-91vQkZv9jH34YZzOfaEjvz4DTBiTRS_lHeHr3VG7L7dUWMdISH_UiazsXilzSaYgOYsZ_TCevSTA2aMQc2pKb5vYwF0Dd1oBCQ-wdvqsA9oshVLNfHEUcb1DOvGKmYHwtwOc_7PJQvg2SLgu3-2c5TL1HUZhXvZ8d0_pcEJg2kfRjAQieX2KbZ9Abre3Zv9zvgfJsWmQ2OoQJT2fbbz0doi40UjNpPexpiPALo7hj6OYkXctmUJj21C5mggoRTR2i-5gsyDpn2WRcZo6Yx2F8SFOe8p3njjiD4no_ohxr_mxAmLdhvbxcEmjZjanTjKrsw/p.jpeg?size=2048x1536&size_mode=3"
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
