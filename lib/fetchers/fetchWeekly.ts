import callLimitDecorator from "../callLimit/callLimit"

type FetchWeekly = (args: FetchWeatherArgs) => Promise<QuintWeeklyForecast>

const fetchWeekly = callLimitDecorator(async function ({lat, lon, units}: FetchWeatherArgs){
    // Revalidate every 30 mins
    const res = await fetch(`
        ${process.env.NEXT_PUBLIC_URL}/api/weekly?lat=${lat}&lon=${lon}&units=${units}&units=${units}
    `, { next: { revalidate: 60 * 30 }})
    if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch hourly ( FetchWeekly )")
    }
    return res.json()
}) as FetchWeekly

export default fetchWeekly