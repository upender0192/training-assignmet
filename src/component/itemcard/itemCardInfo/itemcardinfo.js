import React from 'react';
import './itemcardinfo.css'
import {Link} from 'react-router-dom'

const ItemcardInfo = ({data,applyJob}) => (
    <div className="card">
        <div>
            <h3><Link to={`/detailpage/:${data.id}`}>{data.title}</Link></h3>
            <button onClick={applyJob}>Apply</button>
        </div>
    </div>
)

export default ItemcardInfo;