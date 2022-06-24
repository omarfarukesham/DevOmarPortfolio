import React from 'react';
import Blogs from './Blogs';

const Blog = () => {
    let name = {
       text:'<p>This is omar</p>',
       id: 12,
       lang: 'english'
    }

    return (
        <div>
         <h1>{name.text}</h1>
        </div>
    );
};

export default Blog;