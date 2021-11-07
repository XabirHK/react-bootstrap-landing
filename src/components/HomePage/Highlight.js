/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";


// services
import HomePageDataService from "../../services/homePage.service";
// components

export default class Highlite extends Component {

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
        <div id='portfolio' className='text-center'>
      <div className='container'>
        {/* <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div> */}
        <div className='row'>
            
          <div className='col-sm-8 col-md-8 col-lg-8' style={{textAlign:'left'}}>
          <h4>সাম্প্রতিক পোস্ট</h4>
            {this.state.topPosts
                    ? this.state.topPosts.map(
                        (topPost, i) =>
                    <div key={topPost.id} className=''>
                    <div className='testimonial'>
                        <div className='testimonial-image'>
                        {' '}
                          <img src={topPost.primaryPicture == '' ? primaryPicture = "https://images.saatchiart.com/saatchi/809265/art/7274539/6343753-CUUCWJSM-7.jpg?auto=compress&cs=tinysrgb&h=350"  : primaryPicture = topPost.primaryPicture} alt='' />{' '}
                        </div>
                        <div className='testimonial-content'>
                        <p>{`${ topPost.description.replace(/<[^>]+>/g, '').substring(0, 320)}...`}</p>
                        <div className='testimonial-meta'> - More.. </div>
                        </div>
                    </div>
                    </div>
                )
                : 'loading'}


          </div>

          <div className='portfolio-items col-sm-4 col-md-4 col-lg-4' style={{textAlign:'left'}}>
              <h4>ভিডিও সমূহ </h4>
            {this.state.topPosts
                    ? this.state.topPosts.map(
                        (topPost, i) =>
            <div className='col-sm-6 col-md-6 col-lg-6'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href={topPost.primaryPicture == '' ? primaryPicture = "https://images.saatchiart.com/saatchi/809265/art/7274539/6343753-CUUCWJSM-7.jpg?auto=compress&cs=tinysrgb&h=350"  : primaryPicture = topPost.primaryPicture}
                    title={topPost.title}
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>{topPost.title}</h4>
                    </div>
                    <img style={{minheight:'150px'}}
                      src={topPost.primaryPicture == '' ? primaryPicture = "https://images.saatchiart.com/saatchi/809265/art/7274539/6343753-CUUCWJSM-7.jpg?auto=compress&cs=tinysrgb&h=350"  : primaryPicture = topPost.primaryPicture}
                      className='img-responsive'
                      alt={topPost.title}
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>

            )
            : 'loading'}
            
            
          </div>
        </div>
      </div>
    </div>
        
    );

  }
  
}
