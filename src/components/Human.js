import React from 'react';
import { NavLink } from 'react-router-dom';

const Human = () => {
    return (
        <>

            <div>
                <h1 className='text-center text-primary font-bold text-2xl mt-5'>Choose Your Learning path...</h1>
            </div>

            <div className='flex justify-center mt-5'>
                <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box item-center">
                    <li><NavLink to='/human'>Human Skills</NavLink></li>
                    <li><NavLink to='/programming'>Programming Skills</NavLink></li>
                </ul>
            </div>
            <div>
                <p>Human skills is most on demand skill on your profession whatsoever your domain</p>
            </div>

        </>
    );
};

export default Human;