import React from 'react';
import toolMerchant from '../images/toolMerchant.jpg'
import kidsStore from '../images/kidStore.png'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='mb-5' id="project">
            <div class="divider font-bold text-3xl text-secondary my-20"> Projects </div>
            <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-5 mx-5'>
                <div class=" bg-[#27285C] text-white card card-side bg-base-100  hover:shadow-2xl"  data-aos="flip-left"
     data-aos-duration="2000">
                    <><img class="object-cover w-48" src={toolMerchant} alt="Movie" /></>
                    <div className='ml-3'>
                        <h2 class="text-center text-xl font-bold">ToolMerchant(Full-Stack)</h2>
                        <p className='my-3 font-bold'>Features - </p>
                        <small>1. Firebase(Authentication) and JWT(Authorization)</small><br></br>
                        <small>2. Dashboard with super Admin and users</small><br></br>
                        <small>3. Payment Gateway(strive)</small><br></br>
                        <p className='my-3 font-bold'>Used Technologies</p>
                        <small>ReactJs, Nodejs, ExpressJs, MongoDB, firebase Auth, jwt, Strive(gateway), React Form, DaisyUI,Tailwind CSS.</small>
                        <div class="card-actions justify-start my-4">
                            <a href='https://toolmarchent.firebaseapp.com/' target='_blank' class="btn btn-accent btn-xs text-white">Live webApp</a>
                            <Link  to='/projectDetails1' class="btn btn-accent btn-xs text-white mx-2">See More</Link>
                        </div>
                    </div>
                </div>
                <div class=" bg-[#27285C] text-white card card-side bg-base-100  hover:shadow-2xl"  data-aos="flip-right"
     data-aos-duration="2000">
                    <><img class="object-cover w-48" src='https://images.indianexpress.com/2019/09/toys.jpg' alt="Movie" /></>
                    <div className='ml-3'>
                        <h2 class="text-center text-xl font-bold">kidsStore(Full-Stack)</h2>
                        <p className='my-3 font-bold'>Features - </p>
                        <small>1. Pagination of Products</small><br></br>
                        <small>2. Stock Management System.</small><br></br>
                        <small>3. aos animation</small><br></br>
                        <p className='my-3 font-bold'>Used Technologies</p>
                        <small>ReactJs, Nodejs, ExpressJs, MongoDB, firebase, jwt,Rechart(Graphical Dashboard), Hooks, React Router.</small>
                        <div class="card-actions justify-start my-4">
                            <a  href='https://toystore-react-app.firebaseapp.com/' target='_blank'  class="btn btn-accent btn-xs text-white">Live webApp</a>
                            <Link  to='/projectDetails' class="btn btn-accent btn-xs text-white mx-2">See More</Link>
                        </div>
                    </div>
                </div>
                <div class=" bg-[#27285C] text-white card card-side bg-base-100  hover:shadow-2xl"  data-aos="flip-left"
     data-aos-duration="3000">
                    <><img class="object-cover w-48" src='https://cdn01.alison-static.net/courses/1944/alison_courseware_intro_1944.jpg' alt="Movie" /></>
                    <div className='ml-3'>
                        <h2 class="text-center text-xl font-bold">Corporate Trainer(Frontend)</h2>
                        <p className='my-3 font-bold'>Features - </p>
                        <small>1. Firebase Login system</small><br></br>
                        <small>2. Private Routes</small><br></br>
                        <small>3. Service Booking</small><br></br>
                        <p className='my-3 font-bold'>Used Technologies</p>
                        <small>ReactJs,  firebase Auth, React Form, Bootstrap, React Form</small>
                        <div class="card-actions justify-start my-4">
                            <a href='https://corporate-trainer-app.firebaseapp.com/'  target='_blank'  class="btn btn-accent btn-xs text-white">Live webApp</a>
                        </div>
                    </div>
                </div>
                <div class=" bg-[#27285C] text-white card card-side bg-base-100  hover:shadow-2xl"  data-aos="flip-right"
     data-aos-duration="3000">
                    <><img class="object-cover w-48" src='https://doctorola-b3a35.firebaseapp.com/static/media/chair.3ca333d1fa050f6e6eb4.png' alt="Movie" /></>
                    <div className='ml-3'>
                        <h2 class="text-center text-xl font-bold">Doctorola(Full-Stack)</h2>
                        <p className='my-3 font-bold'>Features - </p>
                        <small>1. Dynamic Date Picker</small><br></br>
                        <small>2. Dashboard for admin and user</small><br></br>
                        <small>3. Doctor Appointment</small><br></br>
                        <p className='my-3 font-bold'>Used Technologies</p>
                        <small>ReactJs, Nodejs, ExpressJs, MongoDB, firebase Auth, jwt, Strive(gateway), React Form, DaisyUI,Tailwind CSS.</small>
                        <div class="card-actions justify-start my-4">
                            <a  href='https://doctorola-b3a35.firebaseapp.com/'  target='_blank' class="btn btn-accent btn-xs text-white">Live webApp</a>
                        </div>
                    </div>
                </div>
              


            </div>
        </div>
    );
};

export default Projects;