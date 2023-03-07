import React from 'react';
import News from './News/News';

const LatestNews = () => {
    const Newses = [
        {
          "_id": "640343e4779db5c47b84fbec",
          "index": 0,
          "degree": "Learn English in ease",
          "message": 34,
          "eye":59,
          "picture": "https://htmldemo.net/study/study/img/news/1.jpg",
          "date":"25 june 2050" ,
          "description": "There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour of passages of Lorem Ipsuable.",
          "email": "rosannajohnson@hinway.com"
        },
        {
          "_id": "640343e4779db5c47b84fbec",
          "index": 0,
          "degree": "Learn English in ease",
          "message": 34,
          "eye":59,
          "picture": "https://htmldemo.net/study/study/img/news/2.jpg",
          "date":"25 june 2050" ,
          "description": "There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour of passages of Lorem Ipsuable.",
          "email": "rosannajohnson@hinway.com"
        },
        {
          "_id": "640343e4779db5c47b84fbec",
          "index": 0,
          "degree": "Learn English in ease",
          "message": 34,
          "eye":59,
          "picture": "https://htmldemo.net/study/study/img/news/3.jpg",
          "date":"25 june 2050" ,
          "description": "There are many variaons of passages of Lorem Ipsuable, amrn in some by injected humour of passages of Lorem Ipsuable.",
          "email": "rosannajohnson@hinway.com"
        },
      ]
    return (
        <div className='container mx-auto'>
            <div className="latestNews text-center">
                <div className="texts">
                <h1 className='text-4xl my-4'>LETEST NEWS</h1>
                <p className='my-5'>There are many variations of passages</p>
                </div>
                <div className="cards grid md:grid-cols-3 gap-6">
                    {
                        Newses.map(news =><News
                        key={news._id}
                        news = {news}
                        ></News>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestNews;