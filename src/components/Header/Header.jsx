import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CoustLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className='nav'>
            <nav>
                <CustomLink className='navDesign' to="/" >Home</CustomLink>
                <CustomLink className='navDesign' to="/About" >About</CustomLink>
                <CustomLink className='navDesign' to="/Friends" >Friends</CustomLink>
                {/* <Link className='navDesign' to="/">Home</Link>
                <Link className='navDesign' to="/About">About</Link>
                <Link className='navDesign' to="/Friends">Friends</Link> */}
        
            </nav>
           
        </div>
    );
};

export default Header;