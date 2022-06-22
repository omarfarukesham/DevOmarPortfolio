import React from 'react';

const Skills = () => {
    return (
        <>
       
       
        <div className='mt-10 bg-base-200 text-black'>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'></div> */}
            <div class=" text-center font-bold text-4xl text-primary py-10"><i class="fa-solid fa-gear px-2"></i> Skills </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div className='mx-auto' >
                    <h1 className='text-2xl font-bold mt-10'> <i class="fa-solid fa-rocket text-2xl text-primary pr-3"></i>Programming Skills</h1>
                    <p className='py-2 '><span className='font-bold'>Front-End</span> - Javascript, ReactJs, HTML5, CSS3, Bootstrap, Tailwind</p>
                    <p className='py-2'><span className='font-bold'>Back-End </span> - Nodejs, Express, MongoDB, Strive(Payment Gateway),ReactQuery</p>
                    <p className='py-2'><span className='font-bold'>Web-Security</span> - Firebase Authentication, jwt(Authorization),</p>
                    <p className='py-2'><span className='font-bold'>Popular Tools</span> - SendGrid,Heroku, Netlify, ReactAuth Hooks</p>
                </div>

                <>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-base-200 p-5 m-2' data-aos="fade-in" data-aos-duration="2000">

                        <div class="indicator m-2">
                            <span class="indicator-item indicator-center badge badge-primary"></span>
                            <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                                <div class="w-32">
                                    <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" />
                                </div>

                            </div>
                        </div>

                        <div class="indicator m-2">
                            <span class="indicator-item indicator-center badge badge-primary "></span>
                            <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                                <div class="w-32 bg-">
                                    <img src="https://www.logo.wine/a/logo/Node.js/Node.js-Logo.wine.svg" />
                                </div>

                            </div>
                        </div>

                        <div class="indicator m-2">
                            <span class="indicator-item indicator-center badge badge-primary"></span>
                            <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                                <div class="w-32 bg-">
                                    <img src="https://www.logo.wine/a/logo/MongoDB/MongoDB-Logo.wine.svg" />
                                </div>

                            </div>
                        </div>


                        <div class="indicator m-2">
                            <span class="indicator-item indicator-center badge badge-primary"></span>
                            <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                                <div class="w-32 bg-">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/768px-Firebase_Logo.svg.png?20200221081546" />
                                </div>

                            </div>
                        </div>
                        <div class="indicator m-2">
                            <span class="indicator-item indicator-center badge badge-primary"></span>
                            <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                                <div class="w-32 bg-">
                                    <img src="https://ies.solutions/wordpress/wp-content/uploads/jwt.png" />
                                </div>

                            </div>
                        </div>

                        <div class="indicator m-2 ">
                            <span class="indicator-item indicator-center badge badge-primary"></span>
                            <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                                <div class="w-32 bg-">
                                    <img src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" />
                                </div>

                            </div>
                        </div>


                    </div>
                </>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

                <div className='bg-base-200 lg:m-5 ms:m-auto'>
                    <img className='rounded-2xl' src="https://resumegenius.com/wp-content/uploads/resume-soft-skills-hero.png" />
                </div>

                <div className='p-5 mt-10 ml-7'>
                    <h1 className='text-2xl font-bold'> <i class="fa-solid fa-people-roof  text-2xl text-primary pr-3"></i>Generic Skills</h1>
                    <p className='py-2'><span className='font-bold'>Supervisory</span> - Intro Management,
                        Leadership,Employee Motivation, Teamwork, Counselling, Conflict-Management,Interpersonal Communication</p>
                    <p className='py-2 mb-5'><span className='font-bold'>Safety </span> - Occupational Health and Safety(EOSH), Fire Safety, Mental Health Safety</p>
                    <a href='https://10minuteschool.com/skills/courses/70/supervisory-skills-training' target='_blank' className='btn btn-primary btn-sm mx-2 text-white'>SoftSkills</a>
                    <a href='https://10minuteschool.com/skills/courses/71/fire-safety-awareness' target='_blank' className='btn btn-primary btn-sm mx-2 text-white'>Awarness</a>
                </div>

            </div>

        </div>
        </>
    );
};

export default Skills;