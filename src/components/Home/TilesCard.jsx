import Image from 'next/image';
import React from 'react';

const TilesCard = ({ tiles }) => {
    return (
        <div className="card bg-base-100 border-t-3 border-t-cyan-400 shadow-sm h-80">
            <figure className='w-full relative h-60'>
                <Image
                    src={tiles.image}
                    alt={tiles.title}
                    fill
                    className="object-cover"
                    priority={true}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{tiles.title}</h2>
                <p className='text-[16px] text-gray-600'>category : {tiles.category}</p>
                <p className='text-[16px] text-gray-600'>Price : {tiles.price} {tiles.currency}</p>
                <div className="card-actions">
                    <button className="btn bg-sky-500 w-full text-white font-semibold text-[16px]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;