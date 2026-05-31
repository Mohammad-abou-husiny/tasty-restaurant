import React ,{useState} from "react";

function Rating(){
    const[rating ,setrating]=useState(0);
    return(
    <div className="rating">
        <p> RATE OUR RESTAURANT:</p>
        {[1,2,3,4,5].map((star) =>(
            <span key={star}onClick={() =>setrating(star)} className={star <= rating ? "star active":"star"}
            >
           ★
            </span>
        
        ))
    }
    {rating >0 && <p>YOU RATED US{rating}/5⭐</p>}

    </div>
    );
}
export default Rating;