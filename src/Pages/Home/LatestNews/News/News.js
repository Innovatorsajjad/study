import React from 'react';

const News = ({ news }) => {
    return (
        <div className='mx-auto'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={news.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {news.degree}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{news.description}</p>
                    <button className='btn btn-primary text-white'>Admit now</button>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{news.eye}</div>
                        <div className="badge badge-outline">{news.message}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;