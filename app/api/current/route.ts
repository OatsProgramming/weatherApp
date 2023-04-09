export async function GET(req: Request){
    const { searchParams } = new URL(req.url)
    const city = searchParams.get('city')
    const state = searchParams.get('state')
    const country = searchParams.get('country')
    const limit = searchParams.get('limit')
    const units = searchParams.get('units') as Units

    try {
        // Get lat && lon
        const res = await fetch(`
            ${process.env.NEXT_PUBLIC_URL}/api/geocodes?city=${city ?? ''}&state=${state ?? ''}&country=${country ?? ''}&limit=${limit ?? ''}
        `)

        if (!res.ok) throw new Error("Failed to fetch coords ( current )")
        // Remember that it returns a list of possible locations
        // Perhaps make it selectable before continuing?
        const result: GeoCode[] = await res.json()
        const { lat, lon } = result[0]

        // Get current weather data
        const res2 = await fetch(`
            https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.NEXT_PUBLIC_API_KEY}
        `)
        if (!res2.ok) throw new Error("Failed to fetch data ( current )")
        return res2
        
    } catch (error) {
        const err = error as Error
        console.error(err)
        return new Response(JSON.stringify(err), { status: 500 })
    }
}


