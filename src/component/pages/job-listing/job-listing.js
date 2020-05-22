import React, { Fragment } from 'react';
import ItemCard from '../../itemcard/itemcard'
import './job-listing.css'

const JobListing = () =>(
    <Fragment> 
        <h3>Job Listing</h3>
        <div className="jobwrapper">
            <ItemCard></ItemCard>
        </div>
    </Fragment>
)

export default JobListing;