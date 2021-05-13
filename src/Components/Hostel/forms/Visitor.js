import React ,{useRef,useState}from 'react'
import {db} from '../../../firebase';
import {Alert} from 'react-bootstrap';
import './visitor.css'
const Visitor = () => {
    const name=useRef();
    const address=useRef();
    const whomToMeet=useRef();
    const mobNo=useRef();
    const time=useRef();
    const relation=useRef();

    const [submit,setSubmited]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        db.visitor.add({
         name:name.current.value,
          address:address.current.value,
          whomToMeet:whomToMeet.current.value,
          relation:relation.current.value,
         mobNo:mobNo.current.value,
          date:time.current.value
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
            <h3>Visitors Entry Register</h3>
            <p>
                <label>Name:</label>
                <input ref={name} type="text" name="name" placeholder="Your Name" required/>
            </p>


            
            <p>
                <label>Address: </label>
                <input ref={address} type="text" name="visitors_address" placeholder="Your Address" required/>
            </p>

            <p>
                <label>Mobile No. :</label>
                <input ref={mobNo} type="text" name="class" placeholder="XXXXXXXXXXX"required/>
            </p>

            <p>
                <label>Whom To Meet:</label>
                <input ref={whomToMeet} type="text" name="room" placeholder="Your Room Number" required/>
            </p>

            <p>
                <label>Relation:</label>
                <input ref={relation} type="text" required/>
            </p>

            <p>
                <label>Date:</label>
                <input ref={time} type="date" name="visit_date"/>
            </p>
        <p>
            <button type="submit">submit Form</button>
        </p>

        
        </form>

    </div>
    )
}

export default Visitor

   

