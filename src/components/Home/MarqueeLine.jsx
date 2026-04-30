import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeLine = () => {
    return (
        // <div className=' my-6 bg-slate-900 w-full'>
        //     <Marquee pauseOnHover={true} speed={100}>
        //         {/* I can be a React component, multiple React components, or just some text. */}
        //         <div className="px-2 py-3 overflow-hidden border-y border-slate-700 container mx-auto">
        //             <div className="animate-marquee whitespace-nowrap text-white font-medium">
        //                 <span className="mx-4">🔥 New Arrivals: Ceramic Blue Tile</span>
        //                 <span className="mx-4">|</span>
        //                 <span className="mx-4">✨ Weekly Feature: Modern Geometric Patterns</span>
        //                 <span className="mx-4">|</span>
        //                 <span className="mx-4">🏡 Join the Community for Exclusive Designs</span>
        //                 <span className="mx-4">|</span>
        //                 <span className="mx-4">🚚 Free Shipping on Orders Over $500!</span>
        //             </div>
        //         </div>
        //     </Marquee>
        // </div>

        <div className='my-6 container mx-auto bg-slate-900 px-4'> 
            <div className="">
                <Marquee pauseOnHover={true} speed={100} gradient={false}>
                    <div className="py-4 text-white font-medium flex items-center ">
                        <span className="mx-8">🔥 New Arrivals: Ceramic Blue Tile</span>
                        <span className="mx-8 text-slate-500">|</span>
                        <span className="mx-8">✨ Weekly Feature: Modern Geometric Patterns</span>
                        <span className="mx-8 text-slate-500">|</span>
                        <span className="mx-8">🏡 Join the Community for Exclusive Designs</span>
                        <span className="mx-8 text-slate-500">|</span>
                        <span className="mx-8">🚚 Free Shipping on Orders Over $500!</span>
                    </div>
                </Marquee>
            </div>
        </div>

    );
};

export default MarqueeLine;