import React from 'react';
import card from '../images/pagination.png'
import firebase from '../images/graph.png'
import admin from '../images/inventory.png'
import Footer from './Footer';

const ProjectDetails = () => {
    return (
        <>
            <h1 className='text-center font-bold text-2xl mt-10 text-primary'><i class="fa-solid fa-circle-info px-2"></i>KidStore ReactApp Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:mx-5 mt-10" >
                <div className='lg:mx-auto mx-3'>
                    <div className=''>
                        <p className='font-bold text-xl'>Proven Track - </p>
                        <a href='https://toystore-react-app.firebaseapp.com/' target='_blank' className='btn btn-primary btn-xs mx-2 text-white my-3' >Live Site </a> ||
                        <a href='https://github.com/omarfarukesham/toyStore-client' target='_blank' className='btn btn-primary btn-xs mx-2 text-white my-3' >GitHub(Client) </a> ||
                        <a href='https://github.com/omarfarukesham/toyStore-server' target='_blank' className='btn btn-primary btn-xs mx-2 text-white my-3' >GitHub(Sever) </a>
                    </div>
                    <br></br>
                    <div className='mx-3'>
                    <p className='font-bold text-xl mt-10'>Used Special Modern Technologies </p>
                    <small className='mx-5'>
                        <li>Javascript, ES6</li>
                        <li>ReactJs</li>
                        <li>NodeJs, ExpressJs</li>
                        <li>dotenv</li>
                        <li>MongoDB</li>
                        <li>Firebase Authentication</li>
                        <li>Jwt Authorization</li>
                        <li>Rechart</li>
                        <li>React-router</li>
                        <li>React-helmet-async</li>
                        <li>aos animation</li>
            
                        <li> React Form</li>
                        <li> Firebase Auth Hooks</li>
                        <li> React Toastify</li>
                        <li> Heroku</li>
                        <li>react-bootstrap</li>
                        <li>DaisyUI</li>
                       
                    </small>
                    <br></br>
                    <p className='font-bold text-justify'> <i class="fa-brands fa-medapps px-2 text-2xl text-primary"></i>
                        This app is excellently min user Store system,
                         in which any authentic user can work in some extend of work,
                          for example, a valid user who can update, reduce, delete,
                           and modify products according to the access. in this application
                            only valid user can go store data on MongoDB to secure the data storing
                             process most popular technology jwt(json web token) has used. Futhermore
                              to valid user firebase auth has also integrated with this app.
                    </p>
                    </div>
                </div>

                <div className='mx-auto '>
                        <div class="card card-compact lg:w-96 sm:w-48 bg-base-100 shadow-xl my-5">
                            <span class="indicator-item badge badge-primary text-white ">Pagination</span>
                            <figure><img src={card} alt="Shoes" /></figure>
                        </div>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl my-5">
                            <span class="indicator-item badge badge-primary text-white ">Dashboard-Graph</span>
                            <figure><img src={firebase} alt="Shoes" /></figure>
                        </div>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl my-5">
                            <span class="indicator-item badge badge-primary text-white ">Inventory</span>
                            <figure><img src={admin} alt="Shoes" /></figure>
                        </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ProjectDetails;