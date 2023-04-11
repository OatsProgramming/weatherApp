import callLimitDecorator from "../callLimit/callLimit"

type FetchCurrent = (args: FetchWeatherArgs) => Promise<CurrentWeather>

const fetchCurrent = callLimitDecorator(async function({lat, lon, units}: FetchWeatherArgs){
    // Revalidate every 15 mins
    const res = await fetch(`
        ${process.env.NEXT_PUBLIC_URL}/api/current?lat=${lat}&lon=${lon}&units=${units}
    `, { next : { revalidate: 60 * 15 }})
    if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch current ( fetchCurrent )")
    }
    return res.json()
}) as FetchCurrent

export default fetchCurrent