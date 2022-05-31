import React from "react";
import image1 from './../assets/images/4.jpg';
import image2 from './../assets/images/5.jpg';
import image3 from './../assets/images/6.jpg';

function Cards() {
  return (
    <div className="wrapper">
      <Card
        img={image1}
         title="Madurai Museum"
        description="See the science, stories, and geography of our Objects of Wonder exhibit from the comfort of your home."
          button="Madurai"
      />

      <Card
        img={image2}
        title="Coimbatore Museum"
        description="See the science, stories, and geography of our Objects of Wonder exhibit from the comfort of your home."
        button="Coimbatore"
      
      />

      <Card  
      img={image3}
       title="Tanjore Museum"
        description="See the science, stories, and geography of our Objects of Wonder exhibit from the comfort of your home."
        button="Tanjore"
      />
    </div>
  );
}

function Card(props) {
  return (

    
    <div className="card my-4 mx-4">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">{props.button}</button>
    </div>
  );
}
export default Cards;

