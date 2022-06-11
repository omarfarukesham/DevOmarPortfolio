import React from 'react';
import devOmar from '../../images/devOmar1.png'
const Banner = () => {
    return (
        <div class='hero h-screen lg:h-[70vh] bg-base-100 relative z-10 py-5 '>
        <div class='hero-content flex-col lg:flex-row'>
          <div className='text-black  ms:text-xl'>
            <p
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='200'
              className='text-xl'
            >
              Welcome to DevOmar Web
            </p>
            <h2
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='1000'
              class='text-4xl font-bold '
            >
            I'm Omar Faruk,<br></br>ReactJs Developer. 
            </h2>
            <p
              data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='2000'
              class='py-6 max-w-xl sm:max-w-lg'
            >
             A quality web app must reduce work complexity, and expedited human productivity.
             no doubt whatsoever the business domain.I will help you to explore your business potential.
            </p>
            <a 
              data-aos='zoom-in'
              data-aos-delay='2000'
              class='btn btn-primary text-white'
              
              target='_blank'
              href='https://drive.google.com/file/d/11ymWayWPVkH497u4rdVVx3_rxhqwRf8c/view'
              download
            >
             Download Resume <i class="fa-solid fa-arrow-down-long font-bold text-white p-2"></i>
            
            </a>
          </div>
          <div className='h-[60vh] shrink-0' data-aos="fade-in" data-aos-duration="2000">
            <img src={devOmar} class='h-full rounded-xl' alt='' />
          </div>
        </div>
      </div>
    );
};

export default Banner;