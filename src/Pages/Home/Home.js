import React from 'react';
import Slider from '../../Components/Slider/Slider';
import About from './About/About';
import Departments from './Deperments/Departments';
import LatestNews from './LatestNews/LatestNews';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Stat from './Stat/Stat';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Departments></Departments>
            <Stat></Stat>
            <PhotoGallery></PhotoGallery>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;