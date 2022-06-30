import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import event from '../images/eventLoop.png'
import Footer from './Footer';
import { CopyBlock, dracula } from "react-code-blocks";

const Blogs = () => {
    let name = {
        text: `var input = []; // initialise an empty array
        var temp = '';
        do {
            temp = prompt("Enter a number. Press cancel or leave empty to finish.");
            if (temp === "" || temp === null) {
                break;
            } else {
                input.push(temp);  // the array will dynamically grow
            }
        } while (1);`,
        language: 'js'
    }


    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-10 text-primary'><i class="fa-solid fa-highlighter px-2"></i>My Blogs(Under Developing......)</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:mx-5 mx-10 mb-10'>
                <div>
                    <h1 className='text-2xl font-bold text-primary'> <i class="fa-solid fa-triangle-exclamation mx-2"></i>Problem & Solution</h1>
                    <>

                        <p className='font-bold mt-10'>Problem - What is the dynamic Array ?</p>
                        <article> <span className='font-bold'>Solution -</span> A dynamic array is an array with a big improvement: automatic resizing.<br></br>
                            One limitation of arrays is that they're fixed size,
                            meaning you need to specify the number of elements your array will hold ahead of time.
                            A dynamic array expands as you add more elements. So you don't need to determine the size ahead of time. </article>

                        <small>
                            Coding Example -
                            <CopyBlock
                                text={name.text}
                                language={'js'}
                                theme={dracula}
                            />
                        </small>
                    </>
                    <>

                        <p className='font-bold mt-10'>Problem - What is the Event Loop in Javascript ?</p>
                        <article> <span className='font-bold'>Solution -</span> Event Loop is very beautify mechanism of javascript, perhaps as a
                            beginners you might know about the javascript is single-thread language, now you might also think how javascript
                            maintaining multi-task or concurrency? Yes, if you understand the javascript execution engine mechanism, you will get the
                            answer including Event-loop. here I have a graphical present and You tube link to make more Clearify, hope you will understand the Event Loop.

                        </article>
                        <small>
                            Example -
                            <iframe width="300" height="150" src="https://www.youtube.com/embed/manw80QNEwM" title="What is Event Loop ? Javascript Bangla(জাভাস্কিপ্ট বাংলা) Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </small>
                        

                    </>
                    <>

                        <p className='font-bold mt-10'>Problem - What is Clouser of Javascript ?</p>
                        <article> <span className='font-bold'>Solution -</span> Definition - Clouser is an ability of function to remember the variable & its function which are declared in its outer function. Clouser gives us access to an outer functions scope from an inner function, when you will create a function every time clouser will be created.
                        </article>
                        <small>
                            Live Example -
                            <iframe width="300" height="150" src="https://www.youtube.com/embed/TqQHaDMBiXg" title="What is closure  ? Javascript Concept Bangla(বাংলা জাভাস্কিপ্ট) tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </small>
                    </>
                </div>
                <div>
                    <h1 className='text-center font-bold text-2xl text-primary'><i class="fa-solid fa-file-arrow-down mx-2"></i>Download High Frequency Interview Question</h1>
                    <div className='mt-12 mx-5'>
                        <a href='https://drive.google.com/file/d/1aBsOMTvSUIlZdd7tldEiWRf7T1vRVyNL/view?usp=sharing' target='_black' className=' bg-base-200 text-primary font-bold p-2 rounded-xl text-center' download>Html5 Interview Q&A</a>
                    </div>


                    <div className='mt-5 mx-5'>
                        <a href='https://drive.google.com/file/d/1aBsOMTvSUIlZdd7tldEiWRf7T1vRVyNL/view?usp=sharing' target='_black'
                            className=' bg-base-200 text-primary font-bold p-2 rounded-xl text-center' download>CSS3 Interview Question&Answer</a>
                    </div>
                    <div className='mt-5 mx-5'>
                        <a href='https://docs.google.com/document/d/199HtISoCJSrx840gRccnXsKhmctOHRm88kNcHF7FS6g/edit?usp=sharing' target='_black'
                            className=' bg-base-200 text-primary font-bold p-2 rounded-xl text-center' download>Javascript Interview Question&Answer</a>
                    </div>
                    <div className='mt-5 mx-5'>
                        <a href='https://docs.google.com/document/d/1VT84Hpoqt3XtdTQEx11ja3Ryz0lnL7lGrpSGL79Uaiw/edit?usp=sharing' target='_black'
                            className=' bg-base-200 text-primary font-bold p-2 rounded-xl text-center' download>ES6 Interview Question&Answer</a>
                    </div>
                    <div className='mt-5 mx-5'>
                        <a href='https://docs.google.com/document/d/1tDwgHKAJ06IcT24ZACHqCvBtN4R156UIyNx6j81xtUc/edit?usp=sharing' target='_black'
                            className=' bg-base-200 text-primary font-bold p-2 rounded-xl text-center' download>ReactJs Interview Question&Answer</a>
                    </div>
                    <div className='mt-5 mx-5'>
                        <a href='https://docs.google.com/document/d/13BdWUYNNAd1Zv2etyxzldoLgtNNKLS1GXZoVhmiAa4g/edit?usp=sharing' target='_black'
                            className=' bg-base-200 text-primary font-bold p-2 rounded-xl text-center' download>NodeJS Interview Question&Answer</a>
                    </div>

                    <div className='mt-5 mx-5'>
                        <a href='https://drive.google.com/file/d/1zdQNixCoFTKSKSLftu3FdOkd2rs-kL5I/view?usp=sharing' target='_black' className=' bg-base-200 text-primary font-bold p-2 rounded-xl text-center' download>Emergency Toolkits(html,css,js,React)</a>
                    </div>


                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;