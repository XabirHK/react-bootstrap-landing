/*eslint-disable*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

// services
import TopMenuDataService from "../../services/topMenu.service";
// components

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default class Navbar extends Component {

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
      <nav id='menu' className='navbar navbar-default'> {/*{//navbar-fixed-top}*/}
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <a className='navbar-brand' href='#page-top'>
            <img src='img/logo/logo_transparent200.png' className='' alt='' />
          </a>
          
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-left'>
            {this.state.menuItems.map(
              (menuItem, i) =>
              <li key = {menuItem.categoryId} className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href={`/list/${menuItem.categoryId}`}
                >
                  <i className="text-gray-500 far text-lg leading-lg mr-2" />{" "}
                  {menuItem.title}
                </a>
              </li>
            )}
          </ul>

          <ul className='nav navbar-nav navbar-right'>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                > 
                  <img src='img/social_media/fb.png' className='social-media-icon' alt='' />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                > 
                  <img src='img/social_media/insta.png' className='social-media-icon' alt='' />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                > 
                  <img src='img/social_media/youtube.png' className='social-media-icon' alt='' />
                </a>
              </li>
          </ul>
        </div>


        {/* <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          
        </div> */}



      </div>
    </nav>
    );

  }
  
}
