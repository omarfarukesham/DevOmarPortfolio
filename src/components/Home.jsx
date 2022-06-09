import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Banner from './Header/Banner';
import Skills from './Skills';

const Home = () => {
    return (
        <>
           <Banner></Banner> 
           <Skills></Skills>
           <Experience></Experience>
           <Education></Education>
        </>
    );
};

export default Home;