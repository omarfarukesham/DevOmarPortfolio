import React from 'react';

const Experience = () => {
    return (
        <>
             <div class="divider font-bold text-3xl text-secondary my-20"> Experiences</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10' data-aos="fade-up" data-aos-duration="2000">
                <div class="card  bg-base-100 hover:shadow-xl">
                    <div class="card-body text-center">
                        <h2 className='text-xl font-bold text-secondary'>10minschools</h2>
                        <p>Freelance Trainer</p>
                        <div class="w-full">
                            <img src="https://bangladeshpost.net/webroot/uploads/featureimage/2020-05/5eb028efcfb2b.jpg" />
                        </div>

                    </div>
                </div>
                <div class="card bg-base-100 hover:shadow-xl">
                    <div class="card-body text-center">
                        <h2 className='text-xl font-bold text-secondary'>BGMEA</h2>
                        <p>Learning and Development, Trainer</p>
                        <div class="w-full">
                            <div>
                                <img src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/thumbnail/lead/news/5189700_5114178_8503083_4819574_9453778_5145035_New%20Project%20(1).jpg" />
                            </div>

                        </div>

                    </div>
                </div>
                <div class="card bg-base-100 hover:shadow-xl">
                    <div class="card-body text-center">
                        <h2 className='text-xl font-bold text-secondary'>ILO, Bangladesh</h2>
                        <p>Sr. Master Trainer</p>
                        <div class="w-full">
                            <img src="https://aiforgood.itu.int/wp-content/uploads/2022/05/ILO-2022-1000x392-1.png" />
                        </div>

                    </div>
                </div>
                <div class="card bg-base-100 hover:shadow-xl">
                    <div class="card-body text-center">
                        <h2 className='text-xl font-bold text-secondary'>a2i, Bangladesh</h2>
                        <p>Trainer</p>
                        <div class="w-full">
                            <img src="https://www.daily-bangladesh.com/media/imgAll/2019December/en/a2i-2001111502.jpg" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Experience;