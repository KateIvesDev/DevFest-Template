import React from 'react';
import VenueImage from '../assets/temp-venue-placeholder.jpeg';

const LocationSection = () => (

    <section className='my-20'>
        <h2 className='text-center'>Venue</h2>
        <div className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
            <div className="mx-auto px-4">
                <a href="https://www.google.com"><img src={VenueImage} className='rounded-2xl overflow-hidden' alt='LOCATION'></img>
                </a>
            </div>
            <div className="mx-auto px-4 text-center">
                <p className='text-xl lg:text-left lg:pt-0'>We're excited to announce that DevFest {process.env.REACT_APP_CHAPTER_NAME} will take place at <span className="font-semibold">SOME GREAT VENUE.</span></p>
                
                <a href="https://www.google.com/maps" className='hover:text-Blue500 lg:text-left'>
                    <p className='text-lg'>VENUE<br />
                   ADDRESS<br />
                   ADDRESS<br />
                   , YOUR STATE YOUR ZIP
                    </p>
                </a>
        </div>
        </div>
    </section>
);

export default LocationSection;