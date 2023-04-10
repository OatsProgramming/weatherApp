import fetchGeo from "@/app/lib/fetchers/fetchGeo"

export async function GET(req: Request){
    const { searchParams } = new URL(req.url)
    const city = searchParams.get('city')
    const state = searchParams.get('state')
    const country = searchParams.get('country')
    const limit = searchParams.get('limit')
    const units = searchParams.get('units') as Units

    if (!city) return new Response(JSON.stringify("Missing query: city"), { status: 400 })

    try {
        // Get lat && lon
        const geos = await fetchGeo({city, state: state ?? '', country: country ?? '', limit: limit ?? '5'})

        // Remember that it returns a list of possible locations
        // Perhaps make it selectable before continuing?
        const { lat, lon } = geos[0]

        // Get current weather data
        const res = await fetch(`
            https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.NEXT_PUBLIC_API_KEY}
        `)
        if (!res.ok) throw new Error("Failed to fetch data ( current )")
        return res
        
    } catch (error) {
        const err = error as Error
        console.error(err)
        return new Response(JSON.stringify(err), { status: 500 })
    }
}


