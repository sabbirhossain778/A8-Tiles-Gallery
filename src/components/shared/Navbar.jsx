'use client'
import Link from 'next/link';
import NavLink from '@/components/shared/NavLink';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Avatar from '../../../public/assets/download.jpeg';
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user, 'navbar');

    return (
        <div className='bg-[#00aeef] text-white border-b border-white/10 sticky top-0 z-50 shadow-md'>
            <div className="container mx-auto py-3 px-4">
                <div className="flex justify-between items-center">

                    {/* Left: Mobile Dropdown & Logo */}
                    <div className="flex items-center gap-2">
                        <div className="dropdown md:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            {/* Dropdown Visibility Fix: Added bg-white and shadow */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-box w-52 text-gray-800">
                                <li><NavLink href={'/'}>Home</NavLink></li>
                                <li><NavLink href={'/all-tiles'}>All Tiles</NavLink></li>
                                {user && <li><NavLink href={'/my-profile'}>My Profile</NavLink></li>}
                            </ul>
                        </div>

                        <Link href='/'>
                            <h2 className='text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap'>Tile Gallery</h2>
                        </Link>
                    </div>

                    {/* Centre: Navigation Links (Desktop) */}
                    <ul className='hidden md:flex justify-center items-center gap-8'>
                        <li className='text-[16px] font-semibold hover:text-gray-200 transition-all'>
                            <NavLink href={'/'}>Home</NavLink>
                        </li>
                        <li className='text-[16px] font-semibold hover:text-gray-200 transition-all'>
                            <NavLink href={'/all-tiles'}>All Tiles</NavLink>
                        </li>
                        {user && (
                            <li className='text-[16px] font-semibold hover:text-gray-200 transition-all'>
                                <NavLink href={'/my-profile'}>My Profile</NavLink>
                            </li>
                        )}
                    </ul>

                    {/* Right: Auth Section */}
                    <div className="flex items-center gap-3">
                        {isPending ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : user ? (
                            <div className='flex gap-2 md:gap-3 items-center'>
                                <h2 className="hidden lg:block font-medium text-white/90">{user?.name}</h2>

                                {/* avatar */}
                                <div className="flex items-center justify-center border-2 border-white/50 rounded-full p-0.5">
                                    {user?.image ? (
                                        <Image
                                            src={user?.image}
                                            alt="User avatar"
                                            width={32}
                                            height={32}
                                            className="rounded-full md:w-8.75 md:h-8.75"
                                        />
                                    ) : (
                                        <RxAvatar className="text-[30px] md:text-[35px] text-white" />
                                    )}
                                </div>
                                {/* Logout Button */}
                                <button
                                    onClick={async () => {
                                        await authClient.signOut();
                                        window.location.href = "/signup";
                                    }}
                                    className='px-4 py-1.5 bg-white text-[#00aeef] rounded-full text-xs md:text-sm font-bold shadow-sm hover:bg-gray-100 transition-all'
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            /* Login Button */
                            <Link href={'/login'} className='px-6 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-900 shadow-lg transition-all'>
                                Login
                            </Link>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;