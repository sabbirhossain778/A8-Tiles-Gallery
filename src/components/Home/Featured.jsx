import React from 'react';
import TilesCard from './TilesCard';

const getData = async () => {
    const res = await fetch('https://a8-tiles-gallery-chi.vercel.app/tiles.json', { cache: 'no-store' })
    const data = await res.json();
    const topTiles = data.slice(0,5)
    // console.log(topTiles,'top tiles');
    return topTiles;
}


const FeaturedSection = async () => {
    const tilesData = await getData();
    return (
         <div className="flex flex-col text-4xl h-80vh container mx-auto">
           <h2 className='w-11/12 mx-auto font-semibold'>Featured Tiles</h2>
            <div className='space-y-4 grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 py-6 w-11/12 mx-auto'>
                {
                    tilesData.map((tiles) => {
                        return <TilesCard key={tiles.id} tiles={tiles} />
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedSection;