export default function ValidateRequest(req: Request) {
    const { searchParams } = new URL(req.url)
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')
    const units = searchParams.get('units')

    if (!lat || !lon || !units) {
        return new Error(`MISSING QUERIES: 
        lat?            ${lat ? 'OK' : 'MISSING'}
        lon?            ${lon ? 'OK' : 'MISSING'}
        units?          ${units ? 'OK' : 'MISSING'}
        `)
    }

    return { lat, lon, units }
}
