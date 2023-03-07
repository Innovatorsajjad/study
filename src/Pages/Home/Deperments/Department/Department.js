import React from 'react';

const Department = ({department}) => {
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={department.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl text-purple-700">{department.department}</h2>
                    <p>Years : {department.years}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;