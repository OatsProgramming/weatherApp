'use client'

import { useState } from "react"
import fetchCurrent from "./lib/fetchers/fetchCurrent"
import callLimitDecorator from "./lib/callLimit/callLimit"
import fetchHourly from "./lib/fetchers/fetchWeekly"

export default function Home() {
    const [data, setData] = useState<QuintWeeklyForecast>()
    const [city, setCity] = useState('')
    async function handleClick() {
        const res = await fetchHourly({
            city: city,
            units: 'imperial'
        })
        console.log(res)
        setData(res)
    }

    return(
        <>
        <button onClick={handleClick}>
            Click
        </button>
        <input onChange={(e) => setCity(e.target.value)}/>
        <div>{data?.list[0].main.temp} Hello</div>
        </>
    )
}