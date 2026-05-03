import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-12">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-gray-100 select-none">
                404
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-4">
                Oops! Page Not Found
            </p>

            <p className="text-gray-500 mt-4 max-w-xs sm:max-w-md md:text-lg leading-relaxed">
                আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যাচ্ছে না। অনুগ্রহ করে সঠিক ইউআরএল চেক করুন।
            </p>

            <Link href="/">
                <button className="mt-10 px-8 py-3.5 bg-[#23ad77] text-white font-bold rounded-xl hover:bg-[#1e9666] transition-all shadow-lg hover:scale-105 active:scale-95">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;