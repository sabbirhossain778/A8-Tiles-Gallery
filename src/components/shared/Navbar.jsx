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
    console.log(user, 'navbar');

    return (
        <div className='bg-slate-400 backdrop-blur-lg border-b sticky top-0 z-50'>

            <div className="grid grid-cols-3 container mx-auto items-center py-4 px-2 gap-6">

                <div className="justify-self-start">
                    <Link href='/'>
                        <h2 className='text-3xl font-bold whitespace-nowrap'>Tile Gallery</h2>
                    </Link>
                </div>

                <ul className='flex justify-center items-center gap-8'>
                    <li className='text-[18px] font-medium whitespace-nowrap'>
                        <NavLink href={'/'}>Home</NavLink>
                    </li>
                    <li className='text-[18px] font-medium whitespace-nowrap'>
                        <NavLink href={'/all-tiles'}>All Tiles</NavLink>
                    </li>
                    <li className='text-[18px] font-medium whitespace-nowrap'>
                        <NavLink href={'/my-profile'}>My Profile</NavLink>
                    </li>
                </ul>


                {isPending ? <h2>Loading...</h2> : user ? (
                    <div className='flex gap-4 items-center justify-self-end'>
                        <h2 className="font-medium text-gray-700">{user?.name}</h2>
                        <div className="flex items-center justify-center">
                            {user?.image ? (
                                <Image
                                    src={user?.image}
                                    alt="User avatar"
                                    width={40}
                                    height={40}
                                    className="rounded-full border"
                                />
                            ) : (
                                <RxAvatar className="text-[40px] text-gray-500" />
                            )}
                        </div>
                        <button
                            onClick={async () => {
                                await authClient.signOut();
                                window.location.href = "/signup";
                            }}
                            className='btn btn-sm'
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="justify-self-end">
                        <Link href={'/login'} className='btn btn-active btn-primary'>
                            Login
                        </Link>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;