import React from 'react';
import Photo from './Photo/Photo';

const PhotoGallery = () => {
    const Photos = [
        {
          "picture": "https://htmldemo.net/study/study/img/gallery/big-1.jpg"
        },
        {
          "picture": "	https://htmldemo.net/study/study/img/gallery/2.jpg"
        },
        {
          "picture": "https://htmldemo.net/study/study/img/gallery/big-3.jpg"
        },
        {
          "picture": "https://htmldemo.net/study/study/img/gallery/big-4.jpg"
        },
        {
          "picture": "https://htmldemo.net/study/study/img/gallery/5.jpg"
        },
        {
          "picture": "https://htmldemo.net/study/study/img/gallery/big-6.jpg"
        },
        {
          "picture": "https://htmldemo.net/study/study/img/gallery/big-7.jpg"
        },
        {
          "picture": "https://htmldemo.net/study/study/img/gallery/8.jpg"
        }
      ]
    return (
        <div className='py-12'>
            <div className="PhotoGallery text-center">
                <h1 className='text-4xl my-4'>PHOTO GALLERY</h1>
                <p className='my-5'>There are many variations of passages</p>

                <div className='grid grid-cols-4'>
                    {
                        Photos.map(photo=><Photo
                        key={photo.picture}
                        photo ={photo}
                        ></Photo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;