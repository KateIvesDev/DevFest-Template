import React from 'react';
import {Link} from 'react-router-dom';
import GoogleLogo from '../assets/sponsors/Google_2015_logo.png';



const SponsorLogos = () => (

    <div className='text-center my-20'>
        <h2>Sponsors</h2>
        <p>Thank you to our sponsors for their generous support.</p>

        <section className='my-20'>
            <h3 className='my-10 font-semibold'>Platinum</h3>
            <div className='flex w-full h-full px-10 justify-center'>
                <img src={GoogleLogo} alt="Google Logo" className="object-contain h-36 w-full"></img>
            </div>
        </section>
        
        <section className='my-20'>
            <h3 className='my-10 font-semibold'>Gold</h3>
                <div className='flex w-full h-full justify-center'>
                    <a href="https://www.google.com">
                        <img src={GoogleLogo} alt="Logo" className="object-contain h-48 w-full"></img>
                    </a>
                </div>
        </section>
        
        {/*
        <section className='my-20'>
            <h3 className='my-10 font-semibold'>Silver</h3>
            <div>
                
            </div>
        </section>
        <section className='my-20'>
            <h3 className='my-10 font-semibold'>Bronze</h3>
                <div>
                    
                </div>
        </section>
*/}
        <section className='my-20'>
            <h3 className='my-10 font-semibold'>Startup</h3>    
            <div className='flex w-full h-full justify-center'>
                <a href="https://www.google.com">
                    <img src={GoogleLogo} alt=" Logo" className="object-contain h-36 w-full"></img>
                </a>
            </div>
        </section>
        <section>
            <h3 className='my-10 font-semibold'>Supporters</h3>
            <div className='w-1/2 grid grid-cols-1 md:grid-cols-2 mx-auto'>
                <div className=''>
                    <a href="https://www.google.com">
                    <img src={GoogleLogo} alt=" Logo" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.google.com">
                    <img src={GoogleLogo} alt="Jetbrains" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div> 
            </div> 
        </section>
        <div className='m-16'>
            <Link to='/sponsors' className='text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4'>Become a Sponsor</Link> 
         </div>

    </div>
);

export default SponsorLogos;