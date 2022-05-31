import React from "react";
import CarouselContainer from './CarouselContainer';
import ImageContainer from './ImageContainer';
import AutoComplete from './AutoComplete';
import Cards from "./Cards";
import History from "./History";

function Gallery() {
  return (
    <div className="gallery">
      <div class="container-fluid">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
          <CarouselContainer />
          <History></History>
		  <AutoComplete />
      <Cards />
          <ImageContainer />
      
        
        
         
            {/* <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            /> */}
          </div>
          {/* <div class="col-lg-5">
          
            
          </div> */}
        </div>
      </div>
    </div>

  );
}



export default Gallery;