import React from "react";
import About from "../components/about.js";
import Hero from "../components/hero.js";
import Speakers from "./speakers.js";
import Sponsor from "./sponsors.js";

const Home = () => (
  <div>
    <Hero />
    <About />
    <Speakers />
    {/* <SpeakerProfiles />
    <LocationSection /> */}
    <Sponsor />
  </div>
);

export default Home;
