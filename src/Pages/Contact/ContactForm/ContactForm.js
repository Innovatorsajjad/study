import React from 'react';

const ContactForm = () => {
    return (
        <div className=''>
            <div className="mainDiv h-96 flex justify-between w-2/3 mx-auto mt-20">
                <div className="contactInfo my-auto "> 
                    <h4>+88 018 785 454 589</h4>
                    <h4>devitems@email.com</h4>
                    <h4>
                        House 09, Road 32, Mohammadpur,<br />
                        Dhaka-1200, UK</h4>
                    <div className="socialMedia">
                    </div>
                </div>
                <div className="sendYourMessage my-auto">
                    <div className="inputFlex flex justify-between">
                        <input className='border mx-2 py-2 ' placeholder='name' type="text" />
                        <input className='border mx-2 ' placeholder='email' type="" />
                    </div>
                    <input className='border w-full mt-5 h-32'placeholder='Type your message' type="text" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;