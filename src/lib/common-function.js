
export const getData = async () => {
    const res = await fetch('https://a8-tiles-gallery-chi.vercel.app/tiles.json', { cache: 'no-store' })
    const data = await res.json();
    return data;
}


