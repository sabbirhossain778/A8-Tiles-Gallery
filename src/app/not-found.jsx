'use client'
import Link from 'next/link';
import { DotLottiePlayer } from '@dotlottie/react-player';

const NotFound = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
            {/* Animation */}
            <div className="w-full h-80 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                <DotLottiePlayer
                    src="https://lottie.host/646531fa-8c7d-4ba2-86c9-065dfe2de96a/PRAS7teZLb.lottie"
                    loop
                    autoplay
                />
            </div>
            
            {/* Text */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mt-4 md:mt-6">
                Oops! Page Not Found
            </h2>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 max-w-[280px] md:max-w-md lg:max-w-lg">
                আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যাচ্ছে না। অনুগ্রহ করে সঠিক ইউআরএল চেক করুন।
            </p>

            <Link href="/">
                <button className="mt-6 md:mt-8 px-6 py-2.5 md:px-10 md:py-3.5 bg-[#23ad77] text-white font-bold text-sm md:text-base rounded-xl hover:bg-[#1e9666] transition-all shadow-lg hover:scale-105 active:scale-95">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;