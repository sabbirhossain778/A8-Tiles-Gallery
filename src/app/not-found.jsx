import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-4">

            <h1 className="text-9xl font-black text-gray-200">404</h1>
            
            <p className="text-2xl font-semibold text-gray-800 mt-4">
                Oops! Page Not Found
            </p>
            
            <p className="text-gray-500 mt-2 max-w-sm">
                আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যাচ্ছে না। অনুগ্রহ করে সঠিক ইউআরএল চেক করুন।
            </p>


            <Link href="/">
                <button className="mt-8 px-8 py-3 bg-[#23ad77] text-white font-bold rounded-lg hover:bg-[#1e9666] transition-all shadow-md">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;