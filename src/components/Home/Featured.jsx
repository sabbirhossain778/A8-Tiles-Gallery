import React from 'react';
import { getData } from '@/lib/fetch-data';
import FeaturedSlider from './FeaturedSlider';

const FeaturedSection = async () => {

    const tilesData = await getData();
    const featuredTiles = tilesData.slice(0, 5);
    return (
        <div className="flex flex-col py-6 md:py-10">
            {/* container mx-auto */}
            <h2 className='w-11/12 mx-auto font-semibold text-3xl md:text-4xl '>Featured Tiles</h2>
            <FeaturedSlider featuredTiles={featuredTiles} />
        </div>
    );
};

export default FeaturedSection;