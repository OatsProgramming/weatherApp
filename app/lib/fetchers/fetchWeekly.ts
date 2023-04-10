import callLimitDecorator from "../callLimit/callLimit"

type FetchWeekly = (args: FetchWUnits) => Promise<QuintWeeklyForecast>

const fetchWeekly = callLimitDecorator(async function ({city, state, country, limit, units}: FetchWUnits){
    // Revalidate every 30 mins
    const res = await fetch(`
        ${process.env.NEXT_PUBLIC_URL}/api/weekly?city=${city}&state=${state ?? ''}&country=${country ?? ''}&limit=${limit ?? ''}&units=${units}
    `, { next: { revalidate: 60 * 30 }})
    if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch hourly ( FetchWeekly )")
    }
    return res.json()
}) as FetchWeekly

export default fetchWeekly