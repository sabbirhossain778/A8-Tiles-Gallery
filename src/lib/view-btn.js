'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useDetailsNavigation = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const handleViewDetails = (id) => {
        if (!session?.user) {
            toast.warning("Please login first to view details!");
            router.push("/login");
        } else {
            router.push(`/all-tiles/${id}`);
        }
    };

    return { handleViewDetails };
};