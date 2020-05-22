import React from 'react';
import {Link} from 'react-router-dom'
import './header.css';

const Header = () => (
    <div className="header">
        <h4><Link to="/">Jobs</Link></h4>
        <ul>
        <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/joblisting">Jobs</Link>
            </li>
            <li>
                <Link to="/newjob">New job</Link>
            </li>
            
        </ul>
    </div>
)

export default Header;