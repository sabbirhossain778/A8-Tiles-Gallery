import TilesCard from '@/components/Home/TilesCard';
import React from 'react';


const getData = async () => {
    const res = await fetch('https://a8-tiles-gallery-chi.vercel.app/tiles.json', { cache: 'no-store' })
    const data = await res.json();
    return data;
}



const AllTilesPage = async () => {
    const tilesData = await getData();
    // console.log(tilesData, 'All Tiles Page');

    return (
        <div className=" bg-base-200">
            <div className='flex flex-col text-4xl pt-6 h-80vh container mx-auto'>
                <h2 className='w-11/12 mx-auto font-semibold'>All tiles are here</h2>
                <div className='grid grid-cols-3 gap-6 my-6 w-11/12 mx-auto'>
                    {
                        tilesData.map((tiles) => {
                            return <TilesCard key={tiles.id} tiles={tiles} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTilesPage;