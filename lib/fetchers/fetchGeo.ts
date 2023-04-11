import callLimitDecorator from "../callLimit/callLimit"

type FetchGeo = (args: FetchGeoArgs) => Promise<GeoCode[]>

const fetchGeo = callLimitDecorator(async function ({city, state, country, limit}: FetchGeoArgs){
    // Just cache it
    const res = await fetch(`
        ${process.env.NEXT_PUBLIC_URL}/api/geocodes?city=${city}&state=${state ?? ''}&country=${country ?? ''}&limit=${limit ?? 5}
    `, { cache: 'force-cache' })
    if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch coords ( fetchGeo )")
    }
    return res.json()
}) as FetchGeo

export default fetchGeo