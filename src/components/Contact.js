import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    console.log(form)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs?.sendForm('service_sokkdoo', 'template_pp1de3u', form.current, '_pExYHow5wWts9bKuKotm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                e.reset()
            });
        alert('Your Email Has sending')

    };

    return (
        <div className='bg-base-200 py-7'>
            <div class="text-center font-bold text-3xl text-secondary mb-3"> <i class="fa-solid fa-paper-plane px-2"></i> Contact Me</div>
            <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-5 mx-5 '>
                <div className='bg-base-100 mt-3 rounded-2xl '>
                    <img class="object-cover rounded-2xl" src='https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?t=st=1654784504~exp=1654785104~hmac=2840d2c066a6a250fd718efca7f429384b1b26c38d96cf027bdf0cdccde78b14&w=1060' alt='contactImage' />
                </div>
                <div className='bg-base-100 mt-3 rounded-2xl p-5'>
                    <>
                        <form ref={form} onSubmit={sendEmail}>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea type="text" name="massage" placeholder="Massage" class="input input-bordered" />
                            </div>

                            <input type="submit" className='btn btn-primary text-white my-3' value="Send Email" />
                        </form>
                    </>
                </div>

                {/* <div class="hero bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="card flex-shrink-0  shadow-2xl bg-base-100">
                            <div class="lg:w-96 lg:p-5 sm:p-2 ">


                            </div>
                        </div>
                    </div>
                </div> */}

            </div>

        </div>
    );
};