import React from 'react';
import SponsorLogos from '../components/sponsors.js';

const Sponsors = () => (

<section>
    <SponsorLogos />
    <div className='w-11/12 mx-auto my-10 grid grid-cols-1 lg:grid-cols-2'>
        <div className='px-5 my-5'>
            <div className='aspect-w-16 aspect-h-9'>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQqhwzM5un7HK-9ZAQ3-3J9ofd1tlquvzz7fkVWpiehdelDEgln037DUlUlLKThYkTBDGXvhmxnm5Ru/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true} mozallowfullscreen='true' webkitallowfullscreen='true' title='DevFest Sponsor Packages - GDG YOUR CITY'></iframe>
            </div>
        </div>
        <div className='px-5 my-5'>
            <h2>Why Sponsor DevFest YOUR CITY?</h2>
            <p className='my-10 text-lg'><span className='font-semibold'>Technical Recruiting:</span> DevFest YOUR CITY is a great opportunity to meet emerging talent in the YOUR CITY tech industry.
            </p>
            <p className='my-10 text-lg'><span className='font-semibold'>Brand Recognition/Product Exposure:</span> Expand your brand presence and expose attendees, partners, and press to your company, product, or API.
            </p>
            <p className='my-10 text-lg'><span className='font-semibold'>Support the YOUR CITY Tech Community:</span> We are excited to be a part of the growing tech community in YOUR CITY. Join us!
            </p>
            <a href='mailto:gdg.batonrouge@gmail.com' className='text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4 my-5'>Become a Sponsor</a>
            <a href='https://drive.google.com/file/d/1pjvZxFx67WWNqYvubWen6lYl5NIZS0DV/view?usp=sharing' className='block font-semibold hover:text-Blue500 my-10'>Download Sponsor Packages</a>
        </div>
        
    </div>
</section>

);

export default Sponsors;