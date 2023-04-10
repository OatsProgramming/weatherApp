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
        lastArgs: {} as FetchArgs | FetchWUnits
    };

    // Reset every min
    const maxRequests = 3 * 18 // 3 calls usually made; 60 max (free version); 18 clicks (safe side)
    const reset = 1_000 * 30
    setInterval(() => {
        requestsMade.current = 0
        requestsMade.lastArgs = {} as FetchArgs | FetchWUnits 
    }, reset)

    // Wrap the fetcher fn w/ a promise
    return function (args: FetchArgs | FetchWUnits) {
        return new Promise((resolve, reject) => {
            // Check to see if user inputted the same location
            const isSameArgs = (isEqualWith(args, requestsMade.lastArgs, caseInsensitive))

            // If so, make sure it's not over the limit
            if (requestsMade.current < maxRequests) {
                console.log(args)
                // Will use Next JS ISR to worry abt old data vs new data caching
                fetcher(args)
                    .then(resolve)
                    .catch(reject)

                // If the args is different, then this will Next JS call the api
                // Therefore, increment and store last args
                if (!isSameArgs) {
                    console.log(args)
                    requestsMade.current += 1
                    requestsMade.lastArgs = args
                }

            } else {
                reject(new Error('API max requests reached. Please try again in one minute'));
            }
        })
    } 
}
