import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = ({ events }) => {
    return (
        <div className='mx-auto relative'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={events.picture} alt="Shoes" /></figure>
                <div className="card-body absolute text-white bottom-0">
                    <Link to={"/"} className="card-title text-blue-800 my-2">
                        {events.tittle}
                        <div className="badge badge-secondary">NEW</div>
                    </Link>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{events.time}</div>
                        <div className="badge badge-outline">{events.location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;