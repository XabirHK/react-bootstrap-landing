/*eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Carousel from 'react-bootstrap/Carousel'

// services
import TopMenuDataService from "../../services/topMenu.service";
// components

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default class About extends Component {

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
        <div id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-md-6'>
                        {' '}
                        <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <div className='about-text'>
                        <h2>নিশ্চিন্তপুর পরিচিতি</h2>
                        <p>আমার স্বপ্নগুলো ডানা মেলে নিশ্চিন্তপুরে, যা আমার স্বপ্ন আর বাস্তবের মিশেলে তৈরী একান্ত কল্পরাজ্য। এই কল্পরাজ্যের একটি বড় অংশ জুড়ে রয়েছে আমার ছেলেবেলায় ফেলে আসা গ্রাম, সেখানে ভাঁট ফুলের গন্ধে ম ম করে বাতাস, নদীর ধারে বাবলা আর জিওলবনের শীতল স্নিগ্ধ ছায়াতলে এক্কাদোক্কা খেলে চড়ুই, অদূরেই একটি মাছরাঙ্গা লুব্ধ দৃষ্টিতে জলের তল খোঁজে আর মাথার উপর দিয়ে হঠাৎ উড়ে যায় এক ঝাঁক ডাহুক। সেখানে বেলাশেষের ইন্দ্রজালে আজো মাঠ নদী বন মিলেমিশে একাকার হয়। অস্থির ব্যস্ত এ সময়ে সারা দিনের ক্লান্তি ভোলার প্রয়াসে চোখ বুজলে এখনো আমি চলে যায় আমার ছোট্ট গ্রামে, প্রাণভরে নিঃশ্বাস নিই। সতেজতা যখন পুরো দেহ মন আচ্ছন্ন করে ফেলে, তারপর ফিরে আসি নতুন কিছু করার উদ্যম আর শক্তি নিয়ে। আর তারই ফলাফল ভাগাভাগি করে নিই এই সাইবার নিশ্চিন্তপুরের সাথে।</p>
                        <h3>আমার সম্পর্কে </h3>
                            <div className='list-style'>
                                <div>
                                    <p>সেখানে ভাঁট ফুলের গন্ধে ম ম করে বাতাস, নদীর ধারে বাবলা আর জিওলবনের শীতল স্নিগ্ধ ছায়াতলে এক্কাদোক্কা খেলে চড়ুই, অদূরেই একটি মাছরাঙ্গা লুব্ধ দৃষ্টিতে জলের তল খোঁজে আর মাথার উপর দিয়ে হঠাৎ উড়ে যায় এক ঝাঁক ডাহুক। সেখানে বেলাশেষের ইন্দ্রজালে আজো মাঠ নদী বন মিলেমিশে একাকার হয়। </p>
                                {/* <ul>
                                    {props.data
                                    ? props.data.Why.map((d, i) => (
                                        <li key={`${d}-${i}`}>{d}</li>
                                        ))
                                    : 'loading'}
                                </ul> */}
                                </div>
                                {/* <div className='col-lg-6 col-sm-6 col-xs-12'>
                                <ul>
                                    {props.data
                                    ? props.data.Why2.map((d, i) => (
                                        <li key={`${d}-${i}`}> {d}</li>
                                        ))
                                    : 'loading'}
                                </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                    
         
    );

  }
  
}
