import React from 'react';
import SingleEvent from './SingleEvent/SingleEvent';

const Event = () => {
    const events = [
        {
            "_id": "640473f4eb790b4de6860c48",
            "tittle":"Learn English in Case",
            "index": 0,
            "picture": "https://htmldemo.net/study/study/img/event/1.jpg",
            "age": 21,
            "time": "4.00 pm - 8.00 pm",
            "location": "Dhaka Bangladesh"
          },
        {
            "_id": "640473f4eb790b4de6860c48",
            "tittle":"Learn English in Case",
            "index": 1,
            "picture": "https://htmldemo.net/study/study/img/event/2.jpg",
            "age": 21,
            "time": "4.00 pm - 8.00 pm",
            "location": "Dhaka Bangladesh"
          },
        {
            "_id": "640473f4eb790b4de6860c48",
            "tittle":"Learn English in Case",
            "index": 2,
            "picture": "https://htmldemo.net/study/study/img/event/3.jpg",
            "age": 21,
            "time": "4.00 pm - 8.00 pm",
            "location": "Dhaka Bangladesh"
          },
        {
            "_id": "640473f4eb790b4de6860c48",
            "tittle":"Learn English in Case",
            "index": 4,
            "picture": "https://htmldemo.net/study/study/img/event/4.jpg",
            "age": 21,
            "time": "4.00 pm - 8.00 pm",
            "location": "Dhaka Bangladesh"
          },
        {
            "_id": "640473f4eb790b4de6860c48",
            "tittle":"Learn English in Case",
            "index": 5,
            "picture": "https://htmldemo.net/study/study/img/event/5.jpg",
            "age": 21,
            "time": "4.00 pm - 8.00 pm",
            "location": "Dhaka Bangladesh"
          },
        {
            "_id": "640473f4eb790b4de6860c48",
            "tittle":"Learn English in Case",
            "index": 6,
            "picture": "https://htmldemo.net/study/study/img/event/6.jpg",
            "age": 21,
            "time": "4.00 pm - 8.00 pm",
            "location": "Dhaka Bangladesh"
          },
    ]
    return (
        <div>
            <div className="texts flex  justify-center">
                <h1 className='text-4xl text-blue-700 my-10'>Our events</h1>
            </div>
            <div className="catagories grid grid-cols-3 gap-y-5">
             {
                events.map(events =><SingleEvent
                key={events._id}
                events={events}
                ></SingleEvent>)
             }
            </div>
        </div>
    );
};

export default Event;