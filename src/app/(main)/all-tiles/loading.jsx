import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">

            <h2 className="text-5xl md:text-7xl font-black text-slate-500 animate-pulse">
                Loading...
            </h2>
            
            <div className="mt-8 w-12 h-12 border-4 border-[#23ad77] border-t-transparent rounded-full animate-spin text-4xl"></div>
        </div>
    );
};

export default Loading;