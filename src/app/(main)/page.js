import Image from "next/image";
import bannerImg from '../../../public/assets/banner.png'
import Banner2 from '../../../public/assets/tiles1.jpg'
import Link from "next/link";
import MarqueeLine from "@/components/Home/MarqueeLine";
import FeaturedSection from "@/components/Home/Featured";
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="overflow-x-hidden">

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 md:py-16 lg:py-20 px-6 lg:px-10 gap-10 md:gap-8 lg:gap-16 min-h-80 md:min-h-90vh">

        {/* Text Section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
            Discover Your <br />
            <span className="text-[#23ad77]">Perfect Aesthetic</span>
          </h1>

          <p className="mt-6 text-base md:text-sm lg:text-lg text-slate-600 max-w-lg">
            Transform your living space with our premium tile collections.
            Crafted for elegance, designed for you.
          </p>

          <div className="mt-8 md:mt-6 lg:mt-10">
            <Link href="/all-tiles">
              <button className="bg-[#23ad77] text-white px-8 md:px-10 lg:px-12 py-3 md:py-3 lg:py-4 h-auto text-lg md:text-base lg:text-xl rounded-xl shadow-lg border-none hover:bg-[#1e9666] transition-all hover:scale-105 active:scale-95 font-bold">
                Browse Now
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group w-full max-w-[400px] md:max-w-md lg:max-w-none">
            <div className="absolute -inset-4 bg-[#23ad77]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>

            <Image
              src={Banner2}
              alt="Banner"
              width={600}
              height={500}
              priority
              className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-auto transform transition-transform duration-500 hover:rotate-2"
            />
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <MarqueeLine />

      {/* Featured Tiles Section */}
      <div className="container mx-auto px-0 min-h-80">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center py-0 w-full">
            <div className="loading loading-spinner loading-lg text-[#23ad77]"></div>
            <p className="mt-4 font-medium text-gray-500 text-xl">Loading Featured Tiles...</p>
          </div>
        }>
          <FeaturedSection />
        </Suspense>
      </div>
    </div>
  );
}
