import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeLine = () => {
    return (
        <div className='bg-gray-200 my-6 container mx-auto py-4 px-4 rounded-3xl'>
            <Marquee pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>

    );
};

export default MarqueeLine;