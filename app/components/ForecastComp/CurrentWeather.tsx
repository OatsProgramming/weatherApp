import { getLocationContext, getWeatherDataContext } from "../SearchBar"
import WeatherIcon from "../chooseIcon/WeatherIcon"

export function CurrentWeather() {
  const { current } = getWeatherDataContext()
  const { city, state, country } = getLocationContext()

  const {
    temp,
    // feels_like,
    temp_min: lowest,
    temp_max: highest,
  } = current.main

  const description = current.weather[0].description

  return (
    <section className="currentWeatherComponent">
      <div className="flex gap">
        <div className="leftSideCurrent positionRelative">
          <div className="blob positionAbsolute" />
          <div>{city} {state ?? country}</div>
          <div>{temp}</div>
          <div>{description}</div>
          <div>H: {highest}  L: {lowest}</div>
        </div>
        <div className="rightSideCurrent grid gridRow3 gridColumn3 ">
          {/* Ignored since we only care about the icon */}
          {/* @ts-ignore */}
          <WeatherIcon weatherObj={current} forecastType="current" />
        </div>
      </div>
    </section>
  )
}


