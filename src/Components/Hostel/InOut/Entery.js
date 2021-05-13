import React from 'react'
import CenterConatiner from '../../Styles/CenterContainer';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Entery = () => {
    return (
        <CenterConatiner>
            <div style={styles}>
               <Link to="/in"><Button>Register In</Button></Link>
               <Link to="/out"><Button>Register Out</Button></Link>
            </div>
        </CenterConatiner>
    )
}
const styles={
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}

export default Entery
