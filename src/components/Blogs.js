import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Footer from './Footer';

const Blogs = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])

    return (
        <div>
            <h1 className='text-center font-bold text-2xl my-10 text-primary'><i class="fa-solid fa-highlighter px-2"></i>My Blogs(Under Developing......)</h1>    
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-5 mx-10'>
                <>
                    {
                        items.map(item => <Blog key={item.id} item={item}></Blog>)
                
                    }
                </>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;