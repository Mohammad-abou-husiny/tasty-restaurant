import React from "react";
import Appetizers from "../assets/Appetizers.webp";
import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import desserts from "../assets/desserts.webp";
import drinks from "../assets/drinks.avif";
import {useState} from "react";

function Menu() {
const [search,setSearch]=useState("");
    return(
<div className="menu"> 
   <h1 id="title">----Our Menu----</h1>
   <input type="text" placeholder="Search " value={search} onChange={(e) => setSearch(e.target.value)} className="search" />
   { ("Hummus MOutabbal Tabbouleh").toLowerCase().includes(search.toLowerCase() ) && (
   <div className="item-menu"> 
        
        <div ><h2 id="titlemenu">🥗Appetizers🥗</h2>
        <ul className="pargmenu">
        <li>Hummus------------------Size-small--2$-medium--3$-large--4$. <br />
        (chickpeas,tahini,olive oil)
        </li>  
    <li>Moutabbal----------------Size-small--2.5$-medium--3$-large--3.5$. <br/>
        (Eggplant,tahini,garlic,lemon)
    </li>
    <li>Tabbouleh---------------Size-small--2$-medium--3.5$-large--4$. <br/>
        (parsley,tommato,bulgur,lemon)
    </li>
    </ul>
</div>
    <img className="imagesmenu"  src={Appetizers} alt="Appetizers imag"  /> 

    
   
   
</div>
   )}
{("Margherita Pepperoni Vegetarian pizza").toLowerCase().includes(search.toLowerCase() ) && (

    <div className="item-menu"> 
        <img className="imagesmenu"  src={pizza} alt="pizza imag"  />
        <div ><h2 id="titlemenu">🍕Pizza🍕</h2>
        <ul className="pargmenu">
        <li>Margherita pizza---------------Size-small--7$-medium--9$-large--12$. <br/>
        (Tomato,Mozzzarella,Basil)
        </li>  
    <li>Pepperoni Pizza----------------Size-small--6$-medium--8$-large--10$. <br/>
        (Pepperoni,Cheese,Tomato sauce)
    </li>
    <li>Vegetarian pizza---------------Size-small--5$-medium--7$-large--10$. <br/>
        (Mushrooms,peppers,olives,onions)
    </li>
    </ul>
</div>

    
</div>
)}
{ (" Classic Cheese BBQ  Burger").toLowerCase().includes(search.toLowerCase() ) && (

<div className="item-menu"> 
        <div><h2 id="titlemenu">🍔Burger🍔</h2>
        <ul className="pargmenu">
        <li>Classic Beef Burger----------Size-small--4$-medium--6$-large--7$. <br/>
        (Beef patty,lettuce,Tomato,sauce)
        </li>  
    <li>Cheese Burger----------------Size-small--3$-medium--5$-large--7$. <br/>
        (Beef patty,cheese,pickles,Ketchup)
    </li>
    <li>BBQ Burger----------------Size-small--4$-medium--6$-large--9$. <br/>
        (Beef,BBQ sauce,onions,cheese)
    </li>
    </ul>
</div>
 <img className="imagesmenu"  src={burger} alt="burger imag" />
    
</div>
)}
{ (" chesse Chocolate Kunafa Desserts").toLowerCase().includes(search.toLowerCase() ) && (

<div className="item-menu"> 
        <img className ="imagesmenu"  src={desserts} alt="desserts imag" />
        <div><h2 id="titlemenu">🍰Desserts🍰</h2>
        <ul className="pargmenu">
        
        <li>Cheese Cake---------------Size-small--3$-medium--7$-large--15$. <br/>
        (Creamy cheese with biscuit base)
        </li>  
    <li>Chocolate Cake----------------Size-small--2.5$-medium--5$-large--7$. <br/>
        (Rich chocolate layers)
    </li>
    <li>Kunafa---------------Size-small--3$-medium--5$-large--7$. <br/>
        (cheese or cream kunafa)
    </li>
    </ul>
</div>

    
</div>
)}
{ ("Water cola Tea Drinks").toLowerCase().includes(search.toLowerCase() ) && (

<div className="item-menu"> 
        <div ><h2 id="titlemenu">🍹Drinks🍹</h2>
        <ul className="pargmenu">
        
        <li>Water---------------Size-small--0.5$-large--1$. 
        </li>  
    <li>Cola--------------Size-small--1$-medium--1.5$-large--2$. 
    </li>
    <li>Fresh Orange Juice-----Size-small--2$-medium--3$-large--4$. </li>
    <li>Ice Tea-----------Size-small--1.5$-medium--3$-large--4$. </li>
    </ul>
</div>
     <img className="imagesmenu"  src={drinks} alt="dranks imag" />
</div>



)}
</div>
    );

}
export default Menu;