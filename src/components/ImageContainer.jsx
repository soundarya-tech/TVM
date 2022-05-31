import React from 'react';
// import { Carousel } from 'react-bootstrap';

import image1 from './../assets/images/3.jpg';
import ReadMoreReadLess from './ReadMoreReadLess';


function ImageContainer() {
    return (
      <div className="Cities">
        <div class="container-fluid">
          <div class="row align-items-center my-4">
            <div class="col-lg-6">
            <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
            </div>
            <div class="col-lg-6">
              <h1 class="font-weight-light">Cities</h1>
             
              <ReadMoreReadLess>
              See the science, stories, and geography
of our Objects of Wonder exhibit from 
the comfort of your home. See the science, stories, and geography
of our Objects of Wonder exhibit from 
the comfort of your home. See the science, stories, and geography
of our Objects of Wonder exhibit from 
the comfort of your home.
          </ReadMoreReadLess>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ImageContainer;



  
  // button {
  //   user-select:none;
  //     -webkit-user-select:none;
  //     -moz-user-select:none;
  //     -ms-user-select:none;
  //     cursor:pointer;
  //     border:none;
  //     padding:8px;
  //     font-size:20px;
  //     background:linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  //     color:white;
  //     font-family:cursive;
  //     box-sizing:border-box;
  //   }