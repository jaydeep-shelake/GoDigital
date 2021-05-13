import React ,{useRef,useState}from 'react'
import {db} from '../../../firebase';
import {Alert,Card,Form,Button} from 'react-bootstrap';
import CenterContainer from '../../Styles/CenterContainer'
import './contact.css';
const Contact = () => {

    const name=useRef();
    const className=useRef();
    const email=useRef();
    const msg=useRef();
    const [submit,setSubmited]=useState(false);
    const handleSubmit=(e)=>{

     e.preventDefault();
     db.contact.add({
        name:name.current.value,
        email:email.current.value,
        message:msg.current.value
     }).then(()=>{
        setSubmited(true);
        setTimeout(()=>{
          setSubmited(false);
        },1600)
     })
    }
    return (
           <CenterContainer style={{marginBottom:'30px'}}>
               {submit&&<Alert variant="success" style={{position:'fixed',top:'10px',right:'20px'}}>Form submitted sucessfully</Alert>}

          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Contact Form</h2>
              <Form onSubmit={handleSubmit} >
              <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" required ref={name} ></Form.Control>
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>email</Form.Label>
                  <Form.Control type="email" required ref={email} ></Form.Control>
                </Form.Group>
                <Form.Group id="class">
                  <Form.Label>Class Name</Form.Label>
                  <Form.Control type="text" required ref={className} ></Form.Control>
                </Form.Group>
                <Form.Group id="mob">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="text" required ref={msg} ></Form.Control>
                </Form.Group>
                 
                <Button  type="submit" className="w-100">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </CenterContainer>
    )
}

export default Contact


    