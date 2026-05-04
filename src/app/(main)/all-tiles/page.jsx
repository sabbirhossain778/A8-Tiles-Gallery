import TilesCard from '@/components/Home/TilesCard';
import { getData } from '@/lib/fetch-data';
import SearchInput from '@/components/shared/SearchInput';


const AllTilesPage = async ({ searchParams }) => {
    const tilesData = await getData();

    const query = (await searchParams)?.search || "";

    const filteredTiles = tilesData.filter((tile) =>
        tile.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className=" bg-base-200">
            <div className='flex flex-col text-4xl pt-6 h-80vh container mx-auto'>

                <div className="w-11/12 mx-auto ">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:mb-6">
                        <h2 className='text-3xl md:text-4xl font-semibold'>All tiles are here</h2>
                        <SearchInput />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 w-11/12 mx-auto'>

                    {
                        filteredTiles.length > 0 ? (
                            filteredTiles.map((tiles) => (
                                <TilesCard key={tiles.id} tiles={tiles} />
                            ))
                        ) : (
                            <p className="col-span-full text-center py-10 text-gray-500">
                                No tiles found for `{query}``
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTilesPage;

