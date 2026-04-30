import Image from "next/image";
import bannerImg from '../../../public/assets/banner.png'
import Banner2 from '../../../public/assets/tiles1.jpg'
import Link from "next/link";
import MarqueeLine from "@/components/Home/MarqueeLine";
import FeaturedSection from "@/components/Home/Featured";


export default function Home() {
  return (

    <div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between my-12 gap-10">

        <div className="flex flex-col items-start text-left md:w-1/2">
          <h1 className="lg:text-6xl md:text-4xl  text-3xl font-extrabold text-slate-900 leading-tight">
            Discover Your <br />
            <span className="text-success">Perfect Aesthetic</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            Transform your living space with our premium tile collections.
            Crafted for elegance, designed for you.
          </p>

          <div className="mt-10">
            <Link href="/all-tiles">
              <button className="btn btn-success text-white px-12 py-4 h-auto text-xl rounded-xl shadow-lg border-none bg-[#23ad77] hover:bg-[#1e9666] transition-all hover:scale-105 active:scale-95">
                Browse Now
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <div className="relative group">

            <div className="absolute -inset-4 rounded-full blur-3xl transition-all"></div>
            <Image
              src={Banner2}
              alt="Banner"
              width={600}
              height={500}
              className="relative z-10 rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 hover:rotate-4"
            />
          </div>
        </div>
      </div>


      <MarqueeLine />
      <FeaturedSection />
     </div>
  );
}
