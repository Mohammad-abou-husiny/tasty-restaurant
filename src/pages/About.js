import React from "react";
import resturant from "../assets/resturant.avif";
import Staff from "../assets/staff.webp";
import chefs from "../assets/chefs.jpg";
function About() {
    return(
        <div>
        
        <div className="about">
     <h1 id="title">----About Us----</h1>
      <div className="item-about">
        <div>
        <h1 id="titleabout">Welcome To Tasty Restaurant😄</h1>
        <p className="pargabout">💢We are a family-owned restaurant dedicated to providing delicious, <br />
            high-quality meals made with fresh ingredients,warm hospitality,<br />
             and a welcoming atmosphere that makes every guest feel like part <br />
             of our family.
        </p>
     </div>
 
     <img className="imagesabout" src= {resturant}  alt="resturant" />
     

</div>
<div className="item-about"> 
     <img className="imagesabout" src={Staff}  alt="resturant emplo" />
     <div>
<h1 id="titleabout">Why Choose Us😋?</h1>
        <ul className="pargabout">
            <li>Fresh ingredients,we believe in the magic of good food</li>
            <li>Coxy and welcoming atmosphere</li>
            <li>Friendly and attentive staff</li>
        </ul>
</div>
</div>
<div className="item-about">
<div>
<h1 id="titleabout">Our Story😍</h1>
        <p className="pargabout">💢We started as a small family kitchen with a big passion for food, <br />
        and today we proudly serve our community with love and tradition</p>
</div>
<img className="imagesabout" src={chefs} alt="chef" />

</div>
</div>
       
 </div>
 
    );
}
 export default About;
