import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto py-14">
            <div className='flex flex-col md:flex-row md:space-x-10 p-6 space-y-3 md:space-y-0'>
                <div className='basis-full md:basis-4/5 '><img className='rounded-lg' src="https://htmldemo.net/study/study/img/about.jpg" alt="" />
                </div>
                <div className=''>
                    <h1 className='text-4xl my-2'>About Study</h1>
                    <p className='my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text amr songr balga ami toami valo lasi ciri din akr dali</p>
                    <button className='btn btn-secondary' >Learn Now</button>
                </div>
            </div>
        </div>
    );
};

export default About;