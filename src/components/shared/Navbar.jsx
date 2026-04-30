import Link from 'next/link';
import React from 'react';
import NavLink from '@/components/shared/NavLink';

const Navbar = () => {
    return (
        <div className='bg-base-300'>
            <div className="grid grid-cols-3 container mx-auto items-center py-4">

                <div className="justify-self-start">
                    <Link href='/'>
                        <h2 className='text-3xl font-bold whitespace-nowrap'>Tile Gallery</h2>
                    </Link>
                </div>

                <ul className='flex justify-center items-center gap-8'>
                    <li className='text-[18px] font-medium'>
                        <NavLink href={'/'}>Home</NavLink>
                    </li>
                    <li className='text-[18px] font-medium'>
                        <NavLink href={'/all-tiles'}>All Tiles</NavLink>
                    </li>
                    <li className='text-[18px] font-medium'>
                        <NavLink href={'/my-profile'}>My Profile</NavLink>
                    </li>
                </ul>

                <div className='flex gap-4 items-center justify-self-end'>
                    <button className='btn bg-sky-400 text-white px-8 text-[18px] rounded-3xl'>
                        <Link href={'/login'}>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;