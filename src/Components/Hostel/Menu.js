import React,{useState}from 'react'
import {CgMenuRight} from 'react-icons/cg';
import {useAuth} from '../../Context/AuthContext';
import {useHistory,Link} from 'react-router-dom'
import './menu.css';
const Menu = ({}) => {
    const[open,setOpen]=useState(false);
    const [err,setErr]=useState(false);
    const {currentUser,userInfo,logout}=useAuth();
    const history =useHistory();
    const handleSignout =async()=>{
        try {
            await logout();
            history.push('/login')
        } catch (error) {
            setErr('Failed to logout')
        }
    }
    return (
        <>
        <div className="burger" onClick={()=>setOpen(!open)}><CgMenuRight className="i2"/></div>
        <div className="menuArea" style={open?{left:'0px'}:{left:'-270px'}}>
            <div className="menu">
               <div className="profileArea">
                  <div className="pofileitem">{userInfo&&userInfo?.name[0]}</div>
                  <p>{currentUser.email}</p>
               </div>
               <div className="items">Feedback form</div>
              <Link to="/contact"><div className="items">Contact us</div></Link>
               <div className="items">About us</div>
               <div className="items" title="logout" onClick={handleSignout}>Sign Out</div>
            </div>
        </div>
        </>
    )
}

export default Menu
