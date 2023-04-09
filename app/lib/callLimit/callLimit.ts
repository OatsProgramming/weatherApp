let requestsMade = 0
const maxRequests = 3 * 18 // 3 calls usually made; 60 max (free version); 18 clicks (safe side)
const reset = 1_000 * 60

export default function callLimit<Fetcher extends Function>(fetcher: Fetcher, args: FetchArgs | FetchWUnits){
    if (requestsMade >= maxRequests){
        throw new Error('API max requests reached. Please try again in one minute')
    } else {
        return fetcher(args)
    }
}

// Not exactly strong but it'll do
setInterval(() => requestsMade = 0, reset)
