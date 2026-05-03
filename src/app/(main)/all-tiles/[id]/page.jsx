import Image from 'next/image';
import React from 'react';


const TileDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    const res = await fetch('https://a8-tiles-gallery-chi.vercel.app/tiles.json', { cache: 'no-store' })
    const data = await res.json();
    const tile = data.find(t => t.id == id);

    if (!tile) return <div className="text-center py-20 text-2xl">Tile not found!</div>;


    return (
        <div className="min-h-90 bg-white py-10">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left side */}
                    <div>
                        <div className="relative h-125 w-full rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            <Image
                                src={tile.image}
                                alt={tile.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-bold text-gray-900 mb-2">{tile.title}</h1>
                        <p className="text-cyan-600 font-medium mb-4">Category: <span className="text-gray-800">{tile.category}</span></p>

                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-extrabold text-gray-900">{tile.price} {tile.currency || 'USD'}</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            {tile.description || "Durable, easy-to-clean ceramic tile with a beautiful glaze finish. Perfect for bathrooms, kitchens, and feature walls."}
                        </p>

                        {/*  */}
                        <div className="border-t border-b border-gray-100 py-6 mb-8">
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div className="text-gray-500 font-medium">Dimensions</div>
                                <div className="text-gray-900 font-semibold">{tile.dimensions}</div>
                                <div className="text-gray-500 font-medium">Material</div>
                                <div className="text-gray-900 font-semibold">{tile.category}</div>
                                <div className="text-gray-500 font-medium">Availability</div>
                                <div className={`font-semibold ${tile.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                    {tile.inStock ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center border rounded-lg h-14">
                                <button className="px-4 py-2 hover:bg-gray-50">-</button>
                                <input type="text" value="1" readOnly className="w-12 text-center font-bold outline-none" />
                                <button className="px-4 py-2 hover:bg-gray-50">+</button>
                            </div>
                            <button  className="flex-1 bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all">
                                Buy Now
                            </button>
                            <button className="p-4 border rounded-lg hover:bg-gray-50">
                                🤍
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileDetailsPage;