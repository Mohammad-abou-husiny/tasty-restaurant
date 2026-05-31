import React, { useState } from "react";

function Contact() {
    const [ name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [order,setOrder]=useState("");
    const [size,setSize]=useState("");
    const [orders,setOrders]=useState([]);
    const [submitted,setSubmitted]=useState(false);
    const [fbName, setFbName] = useState("");
    const [fbEmail, setFbEmail] = useState("");
    const [fbMessage, setFbMessage] = useState("");
    const [feedbackSubmitted,setfeedbackSubmitted]=useState(false);

    const addOrder = () => {
    if(name && phone && order){
    setOrders([...orders,{ name, phone , order ,size }]);
    setOrder("");
    setSize("");
    }
    
    };
    const deleteOrders = (index) => {
     setOrders(orders.filter((_,i) =>i !== index ));
    };
    const submitOrders = () => {
        setOrders([]);
        setSubmitted(true);
    };


    return(
        <section className="contact">
    <h1 id="title">----Our Menu----</h1>
    <div  className="contact-grid">
        <div className="box">
        <h2 className="pargcontact">🛒 Place an Order 🛒</h2>
        
            <p><input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} /></p>
            <p><input type="text" placeholder="Phone Number"  value={phone} onChange={(e) => setPhone(e.target.value)} /></p>
            <p><input type="text" placeholder="Your Order"   value={order} onChange={(e) => setOrder(e.target.value)} /></p>
            <p><input type="text" placeholder=" Size"   value={size} onChange={(e) => setSize(e.target.value)} /></p>
            
            
            
            <p><button onClick={addOrder}>Add Order </button></p>
         
        
        </div>
        {orders.length >0 && (
        <div className="orders-table">
            <h2 className="pargcontact"> orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Order</th>
                        <th>Size</th>
                        <th>Action</th>
                        </tr>
                </thead>
                <tbody>
                    {orders.map((o,index) => (
                        <tr key={index}>
                            <td>{o.name}</td>
                            <td>{o.phone}</td>
                            <td>{o.order}</td>
                            <td>{o.size}</td>
                            <td><button onClick={() => deleteOrders (index)}>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
                </table>
                <button onClick={submitOrders}>Submit Orders</button>
             </div>
    )}
    {submitted && <p className="success-msg"> YOUR ORDER HAS BEEN PLACED SUCCESSFULLY!</p>}

    
    <div  className="box">
        <h2 className="pargcontact">💬 Feedback 💬</h2>
        
          <p><input type="text" placeholder="Your Name" value={fbName} onChange={(e) => setFbName(e.target.value)} /></p>
           <p><input type="email" placeholder="Email" value={fbEmail} onChange={(e) => setFbEmail(e.target.value)} /></p>
            <p><textarea placeholder="Your Feedback" rows="4" value={fbMessage}onChange={(e) =>setFbMessage(e.target.value)} ></textarea ></p>
            <p><button type="button" onClick={() => {setfeedbackSubmitted(true);setFbName("");setFbEmail("");setFbMessage("");}} >Send Feedback</button></p>
            {feedbackSubmitted && <p className="success-msg">THANK YOU FOR YOUR FEEDBACK</p>}
            
    

        </div>
        
    </div>
   
    
        <div className="location">
         <h2>📍 Our Location</h2>
         <a href="https://www.google.com/maps/place/Zahl%C3%A9/@33.845374,35.8905769,14z/data=!3m1!4b1!4m6!3m5!1s0x151f353ad3fa0839:0x64fab81a412d95ee!8m2!3d33.8485061!4d35.8981093!16s%2Fg%2F1yl46_jxh?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">📍Click here to see the lcation📍</a>
         
        </div>


</section>
    );
}
export default Contact;