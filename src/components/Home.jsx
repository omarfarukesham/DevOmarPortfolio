import React from 'react';
import { Contact } from './Contact';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Banner from './Header/Banner';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <>
           <Banner></Banner> 
           <Skills></Skills>
           <Projects></Projects>
           <Experience></Experience>
           <Education></Education>
           <Contact></Contact>
           <Footer></Footer>
        </>
    );
};

export default Home;