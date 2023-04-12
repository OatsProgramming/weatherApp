'use client'
import { AllAnimate } from "@/lib/devTest/AllAnimate"
import { SearchBar } from "./components/SearchBar"
import Forecast from "./components/ForecastComp/Forecast"
import { CurrentWeather } from "./components/ForecastComp/CurrentWeather"

export default function Home() {

    return(
        <>
        {/* <SearchBar>
            <section className='mainGrid'>
              <CurrentWeather />
              <Forecast />
              <Forecast column />
            </section>
        </SearchBar> */}
        <AllAnimate/>
        </>
    )
}