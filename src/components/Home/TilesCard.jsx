import { Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({ tiles }) => {
    return (
        <div className="card bg-base-100 border-t-4 border-t-cyan-400 shadow-md overflow-hidden flex flex-col h-[450px]">
            <figure className='w-full relative aspect-square h-56'>
                <Image
                    src={tiles.image}
                    alt={tiles.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={true}
                />
            </figure>
            <Chip className='absolute right-4 top-4 bg-yellow-400 font-semibold'>{tiles.category}</Chip>
            <div className="card-body">
                <h2 className="card-title">{tiles.title}</h2>
                <p className='text-[16px] text-gray-600'>category : {tiles.category}</p>
                <p className='text-[16px] text-gray-600'>Price : {tiles.price} {tiles.currency}</p>
                <div className="card-actions">
                    <Link href={`/all-tiles/${tiles.id}`}>
                    <button className="btn bg-sky-500 w-full text-white font-semibold text-[16px]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;