"use client";
import 'animate.css';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MyProfilePage = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    const user = session?.user;

    if (!user) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            {/* Animate.css */}
            <div className="animate__animated animate__fadeInUp bg-white p-8 rounded-2xl shadow-xl w-96 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image 
                        src={user.image || "/default-avatar.png"} 
                        alt="profile" fill className="rounded-full border-4 border-blue-500 object-cover" 
                    />
                </div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-500 mb-6">{user.email}</p>
                
                {/* Update Route  */}
                <button 
                    onClick={() => router.push('/my-profile/update')}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};
export default MyProfilePage;