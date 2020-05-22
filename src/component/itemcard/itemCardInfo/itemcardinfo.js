import React from 'react';
import './itemcardinfo.css'
import {Link} from 'react-router-dom'

const ItemcardInfo = ({title,match}) => (
    <div className="card">
        <div>
            <h3>{title}</h3>
            <Link to="/detailpage">Apply</Link>
        </div>
    </div>
)

export default ItemcardInfo;