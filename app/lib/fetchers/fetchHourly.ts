import callLimitDecorator from "../callLimit/callLimit"

type FetchHourly = (args: FetchWUnits) => Promise<HourlyForecast>

const fetchHourly = callLimitDecorator(async function ({city, state, country, limit, units}: FetchWUnits){
    // Revalidate every 30 mins
    const res = await fetch(`
        ${process.env.NEXT_PUBLIC_URL}/api/hourly?city=${city}&state=${state ?? ''}&country=${country ?? ''}&limit=${limit ?? ''}&units=${units}
    `, { next: { revalidate: 60 * 30 }})
    if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch hourly ( fetchHourly )")
    }
    return res.json()
}) as FetchHourly

export default fetchHourly