"use client"; 
import { useRouter } from "next/navigation";
import { HiArrowNarrowLeft } from "react-icons/rx";

const BackButton = () => {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 mb-6 text-gray-600 hover:text-cyan-600 font-medium transition-all group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Explore
        </button>
    );
};

export default BackButton;