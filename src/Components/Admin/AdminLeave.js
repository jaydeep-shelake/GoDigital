import React ,{useState,useEffect}from 'react'
import {db} from '../../firebase';
import CenterConatiner from '../Styles/CenterContainer';
import './admin.css'
const AdminLeave = () => {
    const [leaves,setLeaves]=useState([])
    useEffect(()=>{
        const d=db.leave.get().then(snap=>{
        
            snap.docs.map(doc=>{
             //    console.log(doc.data())
                setLeaves([doc.data()])
         })
     })
    },[])
   
   console.log(leaves)
    
    return (
        <CenterConatiner>
            <div className="leaves">
            {
               leaves?.map(leave=>{
                   return(                   
                   <div className="all" style={{color:'black'}}>
                    <p>{leave.Name}</p>
                    <p>{leave.PRNNo}</p>
                    <p>{leave.branch}</p>
                    <p>{leave.mobNo}</p>
                    <p>{leave.address}</p>
                    <p>{leave.reason}</p>
                   </div>
                   )

               })
            }
            </div>
            
        </CenterConatiner>
    )
}

export default AdminLeave
