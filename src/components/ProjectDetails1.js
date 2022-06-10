import React from 'react';
import card from '../images/card.png'
import firebase from '../images/login.png'
import admin from '../images/admin.png'
import Footer from './Footer';

const ProjectDetails1 = () => {
    return (
        <>
            <h1 className='text-center font-bold text-2xl mt-10 text-primary'><i class="fa-solid fa-circle-info px-2"></i>toolMerchant App Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:mx-5 mt-10" >
                <div className='mx-auto'>
                    <div className='lg:mx-auto mx-3'>
                        <p className='font-bold text-xl'>Proven Track - </p>
                        <a href='https://toolmarchent.firebaseapp.com/' target='_blank' className='btn btn-primary btn-xs mx-2 text-white my-3' >Live Site </a> ||
                        <a href='https://github.com/omarfarukesham/toolMerchant-client' target='_blank' className='btn btn-primary btn-xs mx-2 text-white my-3' >GitHub(Client) </a> ||
                        <a href='https://github.com/omarfarukesham/toolMerchant-server' target='_blank' className='btn btn-primary btn-xs mx-2 text-white my-3' >GitHub(Sever) </a>
                    </div>
                    <br></br>
                   <div className='mx-3'>
                   <p className='font-bold text-xl mt-10'>Used Special Modern Technologies </p>
                    <small className='mx-5'>
                        <li>Javascript, ES6</li>
                        <li>ReactJs</li>
                        <li>NodeJs, ExpressJs</li>
                        <li>MongoDB</li>
                        <li>Firebase Authentication</li>
                        <li>Jwt Authorization</li>
                        <li>Strive(Payment Method)</li>
                        <li> ReactQuery</li>
                        <li> React Form</li>
                        <li>React-router</li>
                        <li>React-helmet-async</li>
                        <li>aos animation</li>
                        <li> Firebase Auth Hooks</li>
                        <li> React Toastify</li>
                        <li> Heroku</li>
                        <li>Tailwind CSS</li>
                        <li>DaisyUI</li>
                    </small>
                    
                    <p className='font-bold text-justify'> <i class="fa-brands fa-medapps px-2 text-2xl text-primary"></i>
                        This app is for E-commerce user who wish to sale their product public.
                        In this app branch of features included, for instance, dynamic product from database .
                        Anytime if merchant wish to upload new product they can do it easily.More interestingly this app has
                        integrated exclusive admin panel in which admin can power to accept order or not.
                        payment method also available for buyer in this app.
                    </p>
                   </div>
                </div>

                <div className='mx-auto '>
                    <div class="card card-compact lg:w-96 sm:w-48 bg-base-100 shadow-xl my-5">
                        <span class="indicator-item badge badge-primary text-white ">Payment</span>
                        <figure><img src={card} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl my-5">
                        <span class="indicator-item badge badge-primary text-white ">Login System</span>
                        <figure><img src={firebase} alt="Shoes" /></figure>
                    </div>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl my-5">
                        <span class="indicator-item badge badge-primary text-white ">Super Admin</span>
                        <figure><img src={admin} alt="Shoes" /></figure>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ProjectDetails1;