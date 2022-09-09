import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGlobe, FaMeetup } from 'react-icons/fa';
import gdg_logo from '../assets/gdg-br.png';

const Footer = () => (

    <footer className='bg-Grey900 text-white p-10 '>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-11/12 mx-auto'>
            <div className=''>
                <h3>About GDG YOUR CITY</h3>
                <p>GDG YOUR CITY is a monthly meetup for technologists and developers from the YOUR CITY area to code, learn, have fun and give back. 
                </p>
                <a href='https://gdg.community.dev/'>
                    <img src={gdg_logo} className='my-3 p-5 bg-white rounded-xl' alt='GDG YOUR CITY logo'></img>
                </a>
            </div>
            <div>
                <h3>Resources</h3>
                <ul>
                    <li>
                        <a href='https://developers.google.com/community/gdg'>Google Developer Groups</a>                        
                    </li>
                    <li>
                        <a href='https://developers.google.com/womentechmakers'>Women Techmakers</a>
                    </li>
                    <li>
                        <a href='https://developers.google.com/community/gdsc'>Google Developer Student Clubs</a>
                    </li>
                    <li>
                        <a href='https://developers.google.com/community/experts'>Google Developer Experts</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <a href='mailto:' className='block' aria-label='send email to GDG YOUR CITY'>YOUR EMAIL</a>
                <ul className='inline-flex space-x-4 text-xl my-4'>
                    <li>
                        <a href='https://gdg.community.dev/' aria-label='GDG Chapter Website'><FaGlobe /></a>
                    </li>
                    <li>
                        <a href='https://www.twitter.com/' aria-label='follow GDG YOUR CITY on Twitter'><FaTwitter /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/' aria-label='follow GDG YOUR CITY on LinkedIn'><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href='https://www.meetup.com/' aria-label='follow GDG YOUR CITY on Meetup'><FaMeetup /></a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>DevFest YOUR CITY</h3>
                <ul>
                    <li>
                        <Link to='/code-of-conduct' className='text-white'>Code of Conduct</Link> 
                    </li>
                    <li>
                        <Link to='/faq' className='text-white'>FAQ</Link> 
                    </li>
                    <li>
                        <Link to ='/volunteer' className='text-white'>Volunteer</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='my-10 text-center'>
            <div>
                <span>Copyright 2022 Google Developer Groups (GDG) YOUR CITY.</span>
            </div>
            <div>
                <span>GDG YOUR CITY is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation.</span>
            </div>
           
        </div>
    </footer>
);

export default Footer;