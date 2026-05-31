import React,{useState} from "react";
function Backtotop(){
const [show, setShow]=useState(false);

window.onscroll= () => {
if(window.scrollY>300)setShow(true);
else setShow(false);

};
if(show){
    return(
        <button onClick={() => window.scrollTo({ top: 0 , behavior:"smooth" })} className="backtotop">
            up
        </button>
    );
}
return null;
}
export default Backtotop;