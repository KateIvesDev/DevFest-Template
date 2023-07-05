import React from 'react';
import About from '../components/about.js';
import Hero from '../components/hero.js';
import Location from '../components/location.js';
import Sponsor from './sponsors.js';

const Home = () => (
  <div>
    <Hero />
    <About />
    {/* <Speakers />
    <SpeakerProfiles /> */}
    <Location />
    <Sponsor />
  </div>
);

export default Home;
