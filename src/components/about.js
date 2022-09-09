import React from 'react';

const About = () => (

    <section className='my-20 flex justify-center'>
        <div className='my-2 text-center m-4 sm:w-3/4 border-solid border-4 border-Yellow500 rounded-3xl p-5 sm:p-10 grid grid-cols-1  lg:grid-cols-2'>
            <div className=''>
                <div className='aspect-w-16 aspect-h-9'>
                    <iframe src="https://www.youtube.com/embed/wgD7-gEK9_Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='z-0'></iframe>
                </div>
            </div>
            <div>
                <h2 className='my-4'>About DevFest</h2>
                <p className='my-2 sm:my-4 sm:px-10 sm:text-xl'>DevFests are Google-sponsored software developer conferences that allow the local software development community to come together to network and learn about the coolest new technology out there.</p>
                <div className='my-4 p-2'>
                    <a href='https://developers.google.com/community/devfest' className='text-white bg-Yellow500 hover:text-white rounded-full text-md px-6 py-4 '>Learn More</a>
                </div>
            </div> 
        </div>
    </section>
);

export default About;
