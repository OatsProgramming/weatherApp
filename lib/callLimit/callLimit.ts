import isEqualWith from "lodash/isEqualWith"

// User inputs: make it case insensitive
function caseInsensitive(value: any, other: any) {
    if (typeof value === 'string' && typeof other === 'string') {
        return value.toUpperCase() === other.toUpperCase()
    }
}

export default function callLimitDecorator<Fetcher extends Function>(fetcher: Fetcher) {
    // Closure ( can't useRef )
    // That way it doesn't reset and each fetcher will share the same value
    let requestsMade = {
        current: 0,
        lastArgs: {} as FetchGeoArgs | FetchWeatherArgs
    };

    // Reset every min
    const maxRequests = 3 * 15 // 3 calls usually made; 60 max per min (free version); 15 clicks (safe side)
    const reset = 1_000 * 60
    setInterval(() => {
        requestsMade.current = 0
        requestsMade.lastArgs = {} as FetchGeoArgs | FetchWeatherArgs
    }, reset)

    // Wrap the fetcher fn 
    return async function (args: FetchGeoArgs | FetchWeatherArgs) {
        // Check to see if user inputted the same location
        const isSameArgs = (isEqualWith(args, requestsMade.lastArgs, caseInsensitive))

        // Check if over limit beforehand
        if (requestsMade.current < maxRequests) {
            try {
                // Will use Next JS ISR to worry abt old data vs new data caching
                const result = await fetcher(args)

                // If the args is different, then this will make Next JS call the api
                // Therefore, increment and store last args
                if (!isSameArgs) {
                    requestsMade.current += 1
                    requestsMade.lastArgs = args
                }
                return result

            } catch (err) {
                console.error(err)
                throw new Error('Failed to fetch')
            }
        } else {
            throw new Error('API max requests reached. Please try again in one minute')
        }

    }
}
