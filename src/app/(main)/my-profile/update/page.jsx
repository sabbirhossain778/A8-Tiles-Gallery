"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { data: session } = authClient.useSession();
    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        // Better Auth Update User Logic
        const { data, error } = await authClient.updateUser({
            name: name,
            image: image,
        });

        if (data) {
            toast.success("Information Updated Successfully!");
            router.push('/my-profile');
        } else {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleUpdate} className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-xl font-bold mb-5 text-center">Update Information</h2>
                
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm font-medium">Name</label>
                        <input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded mt-1" 
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Image URL</label>
                        <input 
                            value={image} 
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full p-2 border rounded mt-1" 
                        />
                    </div>
                    <button type="submit" className="bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700">
                        Update Information
                    </button>
                </div>
            </form>
        </div>
    );
};
export default UpdateProfile;