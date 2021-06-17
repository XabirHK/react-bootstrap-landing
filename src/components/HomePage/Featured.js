/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";


// services
import HomePageDataService from "../../services/homePage.service";
// components

export default class Featured extends Component {

    constructor(props) {
        super(props);
        this.retrieveTopPosts = this.retrieveTopPosts.bind(this);
    
        this.state = {
            topPosts: [],
        };
    } 
    
    componentDidMount() {
    this.retrieveTopPosts();
    }
    
        retrieveTopPosts() {
            HomePageDataService.getHighlitedPosts()
            .then(response => {
            this.setState({
                topPosts: response.data
            });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        }

  render() {
    var primaryPicture = '';
    return (
        <div id='team' className='text-center'>
            <div className='container'>
                <div className='col-md-8 col-md-offset-2 section-title'>
                    <h2>উল্ল্যেখযোগ্য পোস্ট </h2>
                </div>
                <div id='row'>
                {this.state.topPosts
                    ? this.state.topPosts.map(
                        (topPost, i) =>
                        <div key={topPost.id} className='col-md-3 col-sm-6 team'>
                        <div className='thumbnail'>
                            {' '}
                            <img src={topPost.primaryPicture == '' ? primaryPicture = "https://images.saatchiart.com/saatchi/809265/art/7274539/6343753-CUUCWJSM-7.jpg?auto=compress&cs=tinysrgb&h=350"  : primaryPicture = topPost.primaryPicture} alt='...' className='team-img' />
                            <div className='caption'>
                            <h4>{topPost.title}</h4>
                            <p>বিস্তারিত ...</p>
                            </div>
                        </div>
                        </div>
                    )
                    : 'loading'}
                </div>
            </div>
        </div>
    );

  }
  
}
