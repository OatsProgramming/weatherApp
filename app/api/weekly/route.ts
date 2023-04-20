import ValidateRequest from "@/lib/validators/validateRequest"

export async function GET(req: Request) {
    // Check if there are any missing necessary variables
    const queries = ValidateRequest(req)
    if (queries instanceof Error) return new Response(JSON.stringify(queries), { status: 400 })

    const { lat, lon, units } = queries

    try {
        const res = await fetch(`
        https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.NEXT_PUBLIC_API_KEY}
        `)
        if (!res.ok) throw new Error("Failed to fetch data ( weekly )")
        return res
    } catch (error) {
        const err = error as Error
        console.log(err)
        return new Response(JSON.stringify(err), { status: 500 })
    }
}