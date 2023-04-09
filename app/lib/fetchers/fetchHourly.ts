export default async function fetchCurrent({city, state, country, limit, units}: FetchWUnits): Promise<CurrentWeather>{
    const res = await fetch(`
        ${process.env.NEXT_PUBLIC_URL}/api/hourly?city=${city}&state=${state ?? ''}&country=${country ?? ''}&limit=${limit ?? ''}&units=${units}
    `)
    if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch hourly ( fetchHourly )")
    }
    return res.json()
}