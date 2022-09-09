import React from 'react';
import gif from '../assets/DevFest_SaveTheDate_01.gif';

const Hero = () => (
 
    <section className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
        <div className='my-5 mx-auto'>
            <img src={gif} className="mx-auto" alt='DevFest Save The Date Gif'></img>
        </div>
        <div className='mx-auto text-center sm:my-5 w-11/12'>
            <h1>DevFest YOUR CITY <br/>
            </h1>
            <h3 className='text-Green500 font-semibold animate-pulse'>Date: Your Date</h3>
            <p className='sm:px-5 sm:text-lg'>DevFest YOUR CITY is a community-run one-day conference aimed to bring technologists, developers, students, tech companies, and speakers together in one location to learn, discuss and experiment with technology.</p>
            
            <div className='my-10'>
                    <a href="https://gdg.community.dev/events/details/google-gdg-baton-rouge-presents-devfest-baton-rouge-2022/" className='text-white bg-Red500 hover:text-white rounded-full text-md px-6 py-4'>Register</a> 
            </div>
        </div>
    </section>
    
);

export default Hero;