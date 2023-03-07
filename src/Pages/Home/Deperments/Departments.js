import React from 'react';
import Department from './Department/Department';

const Departments = () => {
    const departmentsData = [
        {
          "picture": "	https://htmldemo.net/study/study/img/course/1.jpg",
          "years": 4,
          "department": "Department of Mechanical Engineering (ME)>",
          "id":1
        },
        {
          "picture": "https://htmldemo.net/study/study/img/course/2.jpg",
          "years": 4,
          "department": "Industrial & Production Engineering (IPE)",
          "id":2
        },
        {
          "picture": "	https://htmldemo.net/study/study/img/course/3.jpg",
          "years": 4,
          "department": "Department of Civil Engineering (CE)",
          "id":3
        },
        {
          "picture": "	https://htmldemo.net/study/study/img/course/4.jpg",
          "years": 4,
          "department": "Industrial & Production Engineering (IPE)",
          "id":4
        },
        {
          "picture": "https://htmldemo.net/study/study/img/course/5.jpg",
          "years": 4,
          "department": "Department of Electrical & Electronic Engineering (EEE) ",
          "id":5
        },
        {
          "picture": "https://htmldemo.net/study/study/img/course/6.jpg",
          "years": 4,
          "department": "Department of Biomedical Engineering (BME)",
          "id":6
        }
      ]
    return (
        <div>
            <div className="texts text-center my-5 py-10">
                <h1 className='text-4xl text-purple-700 uppercase my-3'>our Departments</h1>
                <p>There are many variations of passages of Lorem Ipsum</p>
            </div >
            <div className="dataLoad grid md:grid-cols-3 gap-10 container mx-auto">
            {
                departmentsData.map(department =><Department
                key={department.id}
                department = {department}
                ></Department>)
            }
            </div>
        </div>
    );
};

export default Departments;