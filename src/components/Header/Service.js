import {
    ClipboardListIcon,
    CodeIcon,
    DesktopComputerIcon,
    DeviceMobileIcon,
    PuzzleIcon
} from "@heroicons/react/solid";

import React from "react";
import Footer from "../Footer";
const Services = () => {
    return (
        <>
            <div className="bg-[#fff] mx-10">
                <div className="bg-[#fff] container pb-20 pt-16 font-ralway">
                    <div className="mb-16  flex flex-col items-center ">
                        <h1 className="text-5xl  font-bold  text-[#27285C]">
                            <span className="text-primary"><i class="fa-solid fa-circle-info px-2 text-accent"></i>  My Services</span>{" "}
                        </h1>
                        <p className="ml-1 mt-2 text-center  text-primary font-semibold">
                            Are you face Challenging ?
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        <div className="bg-[#27285C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
                            <p className="flex justify-center absolute top-[-35px]">
                                <span className="bg-[#A50074] font-bold p-3 rounded-full">
                                    <DesktopComputerIcon className="w-10 h-10 font-bold " />
                                </span>
                            </p>
                            <div className="h-40 ">
                                <h1 className="text-2xl font-bold text-center mt-3 ">
                                    Web Design
                                </h1>
                                <p className="text-gray-300 font-semibold mt-3 text-center">
                                    Design for any website, certainly a fantastic evaluating tools of
                                    your business progress. Do you wish a awesome design ?
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#27285C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
                            <p className="flex justify-center absolute top-[-35px]">
                                <span className="bg-[#A50074] font-bold p-3 rounded-full">
                                    <DeviceMobileIcon className="w-10 h-10 font-bold " />
                                </span>
                            </p>
                            <div className="h-40 ">
                                <h1 className="text-2xl font-bold text-center mt-3 ">
                                    Responsive Design
                                </h1>
                                <p className="text-gray-300 font-semibold mt-3 text-center">
                                    People are checking your web app in various devices like Mobile, tab, big
                                    Screen, whatsoever the device, responsiveness inevitable, Lets Do your responsive app.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#27285C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
                            <p className="flex justify-center absolute top-[-35px]">
                                <span className="bg-[#A50074] font-bold p-3 rounded-full">
                                    <CodeIcon className="w-10 h-10 font-bold " />
                                </span>
                            </p>
                            <div className="h-40 ">
                                <h1 className="text-2xl font-bold text-center mt-3 ">
                                    Web Development
                                </h1>
                                <p className="text-gray-300 font-semibold mt-3 text-center">
                                    Whatever the domain of Business, software always help you to
                                    enhance human productivity, Do you need a software ? I will help you.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#27285C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
                            <p className="flex justify-center absolute top-[-35px]">
                                <span className="bg-[#A50074] font-bold p-3 rounded-full">
                                    <PuzzleIcon className="w-10 h-10 font-bold " />
                                </span>
                            </p>
                            <div className="h-40 ">
                                <h1 className="text-2xl font-bold text-center mt-3 ">Fix your Bugs</h1>
                                <p className="text-gray-300 font-semibold mt-3 text-center">
                                    No one can make sure web bugs, it might happen randomly in your web app, Don't worry I am always along with you.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#27285C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
                            <p className="flex justify-center absolute top-[-35px]">
                                <span className="bg-[#A50074] font-bold p-3 rounded-full">
                                    <ClipboardListIcon className="w-10 h-10 font-bold " />
                                </span>
                            </p>
                            <div className="h-40 ">
                                <h1 className="text-2xl font-bold text-center mt-3 ">SPA</h1>
                                <p className="text-gray-300 font-semibold mt-3 text-center">
                                    Single page App is getting more popular among tech lover, if you wish to be good digital
                                    Marketer, No doubt single page app must be needed?Rapidly i can help you?
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Services;









// import React from 'react';

// const Service = () => {
//     return (
//         <>
//             <h1 className='text-center font-bold text-2xl mt-10 text-primary'><i class="fa-solid fa-circle-info px-2"></i>Coming Soon.....</h1>
//             <div className='flex justify-center mx-5'>
//                 <div class="stats shadow mx-auto">

//                     <div class="stat ">
//                         <div class="stat-figure text-primary">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
//                         </div>
//                         <div class="stat-title">Total Likes</div>
//                         <div class="stat-value text-primary">25.6K</div>
//                         <div class="stat-desc">21% more than last month</div>
//                     </div>

//                     <div class="stat">
//                         <div class="stat-figure text-secondary">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
//                         </div>
//                         <div class="stat-title">Page Views</div>
//                         <div class="stat-value text-secondary">2.6M</div>
//                         <div class="stat-desc">21% more than last month</div>
//                     </div>

//                     <div class="stat">
//                         <div class="stat-figure text-secondary">
//                             <div class="avatar online">
//                                 <div class="w-16 rounded-full">
//                                     <img src="https://api.lorem.space/image/face?w=128&h=128" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="stat-value">86%</div>
//                         <div class="stat-title">Tasks done</div>
//                         <div class="stat-desc text-secondary">31 tasks remaining</div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default Service;