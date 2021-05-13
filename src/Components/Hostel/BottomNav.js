import React from 'react';
import './bottomnav.css';
import {useAuth} from '../../Context/AuthContext';
import {FaHome}from 'react-icons/fa';
import {BsArrowLeftRight} from 'react-icons/bs';
import {GrNotes} from 'react-icons/gr';
import {BiCommentError} from 'react-icons/bi';
import {Link} from 'react-router-dom'
const BottomNav = () => {
    const {userInfo}=useAuth();
    return (
        <div className="nav">
            <Link to="/profile"><div className="icons profile" title="profile">{userInfo&&userInfo?.name[0]}</div></Link>
            <Link to="/leave"><div className="icons" title="Leave Application"><FaHome className="i"/></div></Link>
           <Link to="/inout"><div className="icons" title="In Out"><BsArrowLeftRight className="i"/></div></Link>
            <Link to="/visitor"><div className="icons" title="Notifications"><GrNotes className="i"/></div></Link>
            <Link to="/complaints"><div className="icons" title="Complaints"><BiCommentError className="i"/></div></Link>
        </div>
    )
}

export default BottomNav
