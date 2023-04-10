// The weather api works with lat && lon

import fetchGeo from "@/app/lib/fetchers/fetchGeo"

// So this will be the first to be called
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const city = searchParams.get('city')
    const state = searchParams.get('state')
    const country = searchParams.get('country')
    const limit = searchParams.get('limit')
   
    try {
        const res = await fetch(`
            http://api.openweathermap.org/geo/1.0/direct?q=${city},${state ?? ''},${country ?? ''}&limit=${limit ?? 5}&appid=${process.env.NEXT_PUBLIC_API_KEY}
        `)
        // Not Found
        if (!res.ok) return new Response(JSON.stringify(res), { status: 404 })
        
        return res

    } catch (error) {
        const err = error as Error
        console.log(err)
        return new Response(JSON.stringify(err), { status: 500 })
    }
}