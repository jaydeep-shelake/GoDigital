import React,{useRef,useState} from 'react'
import {db} from '../../../firebase';
import {Alert} from 'react-bootstrap';
import './complaints.css';
const Complaint = () => {
    const [submit,setSubmited]=useState(false);
    const name=useRef();
    const roomNo=useRef();
    const mobNo=useRef();
    const complaint=useRef();

    const handleSubmit=(e)=>{
         e.preventDefault();
         db.complaints.add({
           name:name.current.value,
           roomNo:roomNo.current.value,
           mobNo:mobNo.current.value,
           complaint:complaint.current.value
         }).then(()=>{
            setSubmited(true);
            setTimeout(()=>{
              setSubmited(false);
            },1600)
         })
    }
    return (
        <div className="main">
            {submit&&<Alert variant="success" style={{position:'fixed',top:'10px',right:'20px'}}>Form submitted sucessfully</Alert>}
 
            <h2>Complaint Registration</h2>

<p>If you are facing any problems , you can fill it out here and we will 
    definitely find solution on it.
</p>

<div class="contact1">
    <form onSubmit={handleSubmit}>
        <h3>Complaint </h3>
        <p>
            <label>Name:</label>
            <input ref={name} type="text" name="name" placeholder="Your Name" required/>
        </p>
        
        <p>
            <label>Room Number:</label>
            <input ref={roomNo} type="text" name="room" placeholder="Your Room Number" required/>
        </p>

        
        <p>
            <label>Mobile No. :</label>
            <input ref={mobNo} type="text" name="class" placeholder="XXXXXXXXXXX"required/>
        </p>

        <p>
            <label>Complaint Regarding:</label>
            <h6>(Explain your complaint in brief)</h6>
            <textarea ref={complaint} name="complaint"  cols="30" rows="8"></textarea>
        </p>

    <p>
        <button type="submit">submit Form</button>
    </p>
    
    </form>
    
</div>


<p class="markup p">Thanks for letting us now about the problem</p>
<p class="markup">We will be glad to solve it soon!</p>


        </div>
    )
}

export default Complaint

    