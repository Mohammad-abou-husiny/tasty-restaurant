import React from "react";
import First from "../assets/first.jpg";
import drinkimage2 from "../assets/drinkimage2.avif";
import three from "../assets/three.jpg";

function Home() {
    return (
        <div>
           
            <div id="demo" className="carousel slide" data-bs-ride="carousel" data-interval="4000" >
   
    <ul className="carousel-indicators">
       <li data-bs-target="#demo" data-bs-slide-to="0" className="active"></li> 
       <li data-bs-target="#demo" data-bs-slide-to="1"></li>
       <li data-bs-target="#demo" data-bs-slide-to="2"></li>
    </ul>
<div className="carousel-inner">
    <div className="carousel-item active">
        <img className="imagehome" src={First}  alt="food" title="food" width="100%" height="500px" />
        <div className="carousel-caption">
            <h1 className="titlehome">Food</h1>
            <p className="h">Delicious Food,Great Atmosphere</p>
        </div>
        </div>
    
        <div className="carousel-item">
        <img className="imagehome" src={drinkimage2} alt="drinks" title="drinks" width="100%" height="500px" />
        <div className="carousel-caption">
            <h1 className="titlehome">Drinks</h1>
            <p className="h">Refreshing Drinks,Great Service</p>
        </div>
    </div>
   
    <div className="carousel-item">
        <img className="imagehome" src={three} alt="desserts" title="desserts" width="100%" height="500px" />
        <div className="carousel-caption">
            <h1 className="titlehome">Desserts</h1>
            <p className="h">Delicious Desserts,perfect Taste</p>
        </div>
    </div>
    </div>
   
    <a className="carousel-control-prev" href="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
    </a>

    <a className="carousel-control-next" href="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
    </a>
</div>
            
           
        </div>
    );
    
}
export default Home;