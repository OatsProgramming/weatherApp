export default async function fetchGeo({city, state, country, limit}: FetchArgs): Promise<GeoCode[]> {
    const res = await fetch(`
        ${process.env.NEXT_PUBLIC_URL}/api/geocodes?city=${city}&state=${state ?? ''}&country=${country ?? ''}&limit=${limit ?? ''}
    `)
    if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch coords ( fetchGeo )")
    }
    return res.json()
}