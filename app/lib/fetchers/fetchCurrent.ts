import callLimitDecorator from "../callLimit/callLimit"

type FetchCurrent = (args: FetchWUnits) => Promise<CurrentWeather>

const fetchCurrent = callLimitDecorator(async function({city, state, country, limit, units}: FetchWUnits){
    // Revalidate every 15 mins
    const res = await fetch(`
        ${process.env.NEXT_PUBLIC_URL}/api/current?city=${city}&state=${state ?? ''}&country=${country ?? ''}&limit=${limit ?? ''}&units=${units}
    `, { next : { revalidate: 60 * 15 }})
    if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch current ( fetchCurrent )")
    }
    return res.json()
}) as FetchCurrent

export default fetchCurrent