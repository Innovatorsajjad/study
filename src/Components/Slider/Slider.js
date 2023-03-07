import React from 'react';
import "../Slider/Slider.css"

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className=" slide1 carousel-item relative w-full">
                    <div className="firstSlider w-1/2 mx-auto my-52 text-white ">
                        <h3 className='text-3xl my-5'>Welcome To Study</h3>
                        <h1 className='text-5xl my-5 font-bold'>The Best Learning Institution</h1>
                        <p className='my-5'>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which
                            don't look even slightly believable.</p>
                        <button className='btn btn-info'>View Courses</button>
                    </div>
                    {/* <img src="" className="w-full " alt=''/> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className=" slide2 carousel-item relative w-full text-white">
                <div className="secondSlider w-1/2 mx-auto my-52 ">
                        <h3 className='text-3xl my-5'>Welcome To Study</h3>
                        <h1 className='text-5xl my-5'>The Best Learning Institution</h1>
                        <p className='my-5'>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which
                            don't look even slightly believable.</p>
                        <button className='btn btn-info'>View Courses</button>
                    </div>
                    {/* <img src="" className="w-full" alt='' /> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;