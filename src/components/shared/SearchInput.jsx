"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { handleSearch } from '@/lib/common-function';

export default function SearchInput() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const handleSearch = (userInput) => {
        const params = new URLSearchParams(searchParams);
        if (userInput) {
            params.set("search", userInput);
        }
        else {
            params.delete("search");
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
            <div className="flex flex-col items-start md:items-end gap-1"> 
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Search products</label>
                
                <div className="flex items-center rounded-3xl gap-2 border px-3 py-1.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <span className="text-gray-400">🔍</span>
                    
                    <input 
                        className="w-full md:w-[280px] outline-none text-sm" 
                        placeholder="Search products..." 
                        defaultValue={searchParams.get("search")?.toString()} 
                        onChange={(e) => handleSearch(e.target.value)} 
                    />
                    
                    {searchParams.get("search") && (
                        <button 
                            type="button"
                            onClick={() => handleSearch("")} 
                            className="text-gray-400 hover:text-red-500 text-xs font-bold"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}