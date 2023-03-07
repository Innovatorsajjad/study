import React from 'react';

const Photo = ({photo}) => {
    return (
        <div>
            <img src={photo.picture} alt="" />
        </div>
    );
};

export default Photo;