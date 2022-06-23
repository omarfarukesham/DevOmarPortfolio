import React from 'react';

const Loding = () => {
    return (
        <div>
            <div className="flex items-center justify-center ">
                <div className="w-16 h-16 border-b-4 mt-56 border-gray-900 rounded-full animate-spin"></div>
                {/* <progress class="progress w-56 mt-56"></progress> */}
            </div>
        </div>
    );
};

export default Loding;