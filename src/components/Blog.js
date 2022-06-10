import React from 'react';

const Blog = ({ item }) => {
    const { author, image, reading_time, Article } = item
    return (
        <div>

            <div class="card card-side bg-base-100 shadow-xl" >

                <div class="card-body">
                    <img src={image} alt="images" />
                    <h2 class="card-title">Author - {author}</h2>
                    <h2 class="card-title">Reading Time - {reading_time}</h2>
                    <small>Article #01 {Article.slice(0, 200)}</small>
                    <div class="card-actions justify-end">
                        <label for="my-modal-6" class="btn btn-primary btn-xs modal-button text-white">Read More</label>
                    </div>
                </div>
            </div>


            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{author}</h3>
                    <img src={image} alt='articlaImg' />
                    <p class="py-4">{Article}</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;