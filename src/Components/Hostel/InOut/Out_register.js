import React,{useRef,useState}from 'react';
import {db} from '../../../firebase';
import {Alert} from 'react-bootstrap'
import './out.css';
const Out_register = () => {
    const name=useRef();
    const branch=useRef();
    const roomNo=useRef();
    const mobNo=useRef();
    const departure=useRef();

    const [submit,setSubmited]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        db.Out_register.add({
         name:name.current.value,
         branch:branch.current.value,
         roomNo:roomNo.current.value,
         mobNo:mobNo.current.value,
        returingTime:departure.current.value
        }).then(()=>{
           setSubmited(true);
           setTimeout(()=>{
             setSubmited(false);
           },1200)
        });
    }
    return (
        <div className="contact1">
            {submit&&<Alert variant="success" style={{position:'fixed',top:'10px',right:'20px'}}>Form submitted sucessfully</Alert>}
        <form onSubmit={handleSubmit}>
            <h3>OUT - Entry Register</h3>
            <p>
                <label>Name:</label>
                <input ref={name} type="text" name="name" placeholder="Your Name" required/>
            </p>
            
            <p>
                <label>Branch and Year:</label>
                <input ref={branch} type="text" name="branch" placeholder="Your class and branch" required/>
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
            <label>Returning Time:</label>
            <input ref={departure} type="datetime-local"/>
        </p>

        <p>
            <button>submit Form</button>
        </p>

        
        </form>

    </div>
    )
}

export default Out_register

    