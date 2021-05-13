import React ,{useRef,useState}from 'react';
import {Alert}from 'react-bootstrap'
import './leave.css';
import {db} from '../../../firebase'
const Leave = () => {
    const nameRef=useRef();
    const branch=useRef();
    const number =useRef();
    const mobNo=useRef();
    const parentNo=useRef();
    const reason =useRef();
    const address =useRef();
    const departureTime=useRef();
    const returiningDate=useRef();

    const [submited,setSubmited]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
           db.leave.add({
            Name:nameRef.current.value,
            branch:branch.current.value,
            PRNNo:number.current.value,
            mobNo:mobNo.current.value,
            parentNo:parentNo.current.value,
            reason:reason.current.value,
            address:address.current.value,
            departureTime:departureTime.current.value,
            returiningDate:returiningDate.current.value   
           }).then(()=>{
               console.log('submited');
            nameRef.current.value="";
            branch.current.value="";
            number.current.value="";
            mobNo.current.value="";
            parentNo.current.value="";
            reason.current.value="";
            address.current.value="";
            departureTime.current.value="";
            returiningDate.current.value="";
            setSubmited(true)
            setTimeout(() => {
                setSubmited(false);
            },1200);
           })
    }
    return (
        <div>
            {submited&&<Alert variant="success" style={{position:'fixed',top:'10px',right:'20px'}}>Form submitted sucessfully</Alert>}
            <div class="contactLeave">
            <form onSubmit={handleSubmit}>
            <p>
                <label>Name:</label>
                <input ref={nameRef} type="text" name="name" placeholder="Your Name" required/>
                <p>
                <label>Branch and Year:</label>
                <input ref={branch} type="text" name="branch" placeholder="Your class and branch" required/>
            </p>

            <p>
                <label>PRN Number:</label>
                <input ref={number}type="number" name="prn" placeholder="Your PRN" required/>
            </p>

        <p>
            <label>Mobile No. :</label>
            <input ref={mobNo} type="text" name="class" placeholder="XXXXXXXXXXX"required/>
        </p>

        <p>
            <label>Parent's Mobile Number:</label>
            <input ref={parentNo} type="text" name="parent_num" placeholder="XXXXXXXXXXX" required/>
        </p>

        <p>
            <label>Reason for leave:</label>
            <textarea ref={reason} name="" id="" cols="30" rows="4"></textarea>
        </p>

        <p>
            <label>Destination Address:</label>
            <textarea ref={address} name="" id="" cols="30" rows="4"></textarea>
        </p>

        <p>
            <label>Departure Time:</label>
            <input  ref={departureTime} type="datetime-local"/>
        </p>

        <p>
            <label>Returning Date:</label>
            <input ref={returiningDate} type="date"/>
        </p>
        <p>
            <button type="submit">submit Form</button>
        </p>
            </p>
            </form>
            </div>
        </div>
    )
}

export default Leave
