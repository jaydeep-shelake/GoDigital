import React,{useState,useRef} from 'react'
import {useAuth} from '../../Context/AuthContext';
import {Card,Form,Button,Alert} from 'react-bootstrap';
import CenterContainer from '../Styles/CenterContainer';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
const SignUp = () => {

   const [err,setErr]=useState('');
   const [loading ,setLoading]=useState(false);

  const emailRef=useRef();
  const passwordRef=useRef();
  const nameRef=useRef();
  const mobRef=useRef();
  const {signup,userInfo} =useAuth();
  const history = useHistory();
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      setLoading(true)
      setErr('');
      await signup(emailRef.current.value,passwordRef.current.value,nameRef.current.value,mobRef.current.value);
      history.push("/");
    }
    catch{
     setErr('Failed to create account');
    }
    setLoading(false);
  }

    return (
        <CenterContainer>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign up</h2>
              {/* {JSON.stringify(currentUser?.email)} */}
              {err&&<Alert variant="danger">{err}</Alert>}
              <Form onSubmit={handleSubmit} >
              <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" required ref={nameRef} ></Form.Control>
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required ref={emailRef} ></Form.Control>
                </Form.Group>
                <Form.Group id="mob">
                  <Form.Label>Mob.No</Form.Label>
                  <Form.Control type="tel" required ref={mobRef} ></Form.Control>
                </Form.Group>
                 
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required ref={passwordRef} ></Form.Control>
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-100">Signup</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
               Already have a accout ? <Link to="/login">login</Link>
             </div>
        </CenterContainer>
    )
}

export default SignUp;
