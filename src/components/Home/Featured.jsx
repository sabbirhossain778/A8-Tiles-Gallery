import React from 'react';
import { getData } from '@/lib/common-function';
import FeaturedSlider from './FeaturedSlider';

const FeaturedSection = async () => {

    const tilesData = await getData();
    const featuredTiles  = tilesData.slice(0, 5);
    return (
        //  <div className="flex flex-col text-4xl h-80vh container mx-auto">
        //    <h2 className='w-11/12 mx-auto font-semibold'>Featured Tiles</h2>
        //     <div className='space-y-4 grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 py-6 w-11/12 mx-auto'>
        //         {
        //             featuredTiles.map((tiles) => {
        //                 return <TilesCard key={tiles.id} tiles={tiles} />
        //             })
        //         }
        //     </div>
        // </div>

        <div className="flex flex-col container mx-auto py-10">
            <h2 className='w-11/12 mx-auto font-semibold text-4xl mb-4'>Featured Tiles</h2>
            <FeaturedSlider featuredTiles={featuredTiles} />
        </div>
    );
};

export default FeaturedSection;