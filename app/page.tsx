'use client'

import { useState } from "react"
import fetchCurrent from "./lib/fetchers/fetchCurrent"
import callLimitDecorator from "./lib/callLimit/callLimit"
import fetchHourly from "./lib/fetchers/fetchHourly"

export default function Home() {
    const [data, setData] = useState<HourlyForecast>()
    const [city, setCity] = useState('')
    async function handleClick() {
        const res = await fetchHourly({
            city: city,
            units: 'F'
        })
        console.log(res)
        setData(data)
    }

    return(
        <>
        <button onClick={handleClick}>
            Click
        </button>
        <input onChange={(e) => setCity(e.target.value)}/>
        <div>{data?.weather[0].description}</div>
        </>
    )
}