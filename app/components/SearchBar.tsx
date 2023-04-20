import fetchCurrent from "@/lib/fetchers/fetchCurrent";
import fetchGeo from "@/lib/fetchers/fetchGeo";
import fetchWeekly from "@/lib/fetchers/fetchWeekly";
import get24HrForecast from "@/lib/sorters/get24HrForecast";
import getHighsNLows from "@/lib/sorters/getHighsNLows";
import { LazyMotion, m } from "framer-motion";
import { createContext, ReactNode, useContext, useRef, useState } from "react";
import styles from '@/app/components/css/searchBar.module.css'

const LocationContext = createContext({} as LocationContext)
const WeatherDataContext = createContext({
    current: {} as CurrentWeather,
    next24Hr: [] as ForecastObj[],
    next5D: [] as DayMapArrFormat[]
})

export function getWeatherDataContext() {
    return useContext(WeatherDataContext)
}
export function getLocationContext() {
    return useContext(LocationContext)
}

export function SearchBar({ children }: { children: ReactNode }) {
    // Animation features
    const loadFeatures = () => import('@/lib/animation/domMax').then(mod => mod.default)

    // Show content if true
    const [page, setPage] = useState(false)
    // Alternate temp measurements
    const [units, setUnits] = useState<Units>('imperial')

    // For query only 
    // ( useRef: helps with performance since it has animations )
    const locationQuery = useRef({
        city: '',
        state: '',
        country: ''
    })

    // To be passed onto context
    // Set once query is handled
    const [locationData, setLocationData] = useState({} as LocationContext)

    const [weatherData, setWeatherData] = useState({
        current: {} as CurrentWeather,
        next24Hr: [] as ForecastObj[],
        next5D: [] as DayMapArrFormat[],
    })

    // onClick, not onChange: this is to lowers API calls
    async function handleQuery(e: React.MouseEvent) {
        e.preventDefault()
        const { city, state, country } = locationQuery.current
        // Get coords ( lat && lon ) to use actual weather api
        const coords = await fetchGeo({ city, state, country })
        const { lat, lon } = coords[0]

        // For now, use the first location that pops up
        setLocationData({
            city: coords[0].name,
            state: coords[0].state,
            country: coords[0].country,
        })

        // Get weather data
        const [current, quintWeeklyForecast] = await Promise.all([
            fetchCurrent({ lat, lon, units }),
            fetchWeekly({ lat, lon, units })
        ])

        // Break up quintWeekly data into two
        const next24Hr = get24HrForecast(quintWeeklyForecast)
        // Data from the api ( free tier ) has inaccurate highs n lows
        // Add data ( highs n lows ) to QuintWeeklyForecast object
        const next5D = getHighsNLows(quintWeeklyForecast)

        setWeatherData({ current, next24Hr, next5D })
        setPage(true)
    }

    function handleUnits(e: React.MouseEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement
        setUnits(target.id as Units)
    }

    function changeLocation(locationData: { city: string } | { state: string } | { country: string }) {
        locationQuery.current = {
            ...locationQuery.current,
            ...locationData
        }
    }

    return (
        <>
            <form className={styles['container']}>
                <div className={styles['searchBar']}>
                    <input placeholder="city" type='text' onChange={(e) => changeLocation({ city: e.target.value })} />
                    <input placeholder="state" type='text' onChange={(e) => changeLocation({ state: e.target.value })} />
                    <input placeholder="country" type='text' onChange={(e) => changeLocation({ country: e.target.value })} />
                    <div onClick={handleQuery}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
                <div className="units flex gap"> Units:
                    {/* Move line based on selection ( animation ) */}
                    <LazyMotion features={loadFeatures} strict>
                        <div className="positionRelative" onClick={handleUnits} id='standard'>
                            {units === 'standard' &&
                                <m.div className='highlight' layoutId='highlight' />}
                            °K
                        </div>
                        <div className="positionRelative" onClick={handleUnits} id='imperial'>
                            {units === 'imperial' &&
                                <m.div className='highlight' layoutId='highlight' />}
                            °F
                        </div>
                        <div className="positionRelative" onClick={handleUnits} id='metric'>
                            {units === 'metric' &&
                                <m.div className='highlight' layoutId='highlight' />}
                            °C
                        </div>
                    </LazyMotion>
                </div>
            </form>

            <WeatherDataContext.Provider value={weatherData}>
                <LocationContext.Provider value={locationData}>
                        {page && children}
                </LocationContext.Provider>
            </WeatherDataContext.Provider>
        </>
    )
}