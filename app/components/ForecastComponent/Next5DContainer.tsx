import simplifyTime from "@/lib/simplifyTime";
import { getWeatherDataContext } from "../SearchBar";
import { WeatherIcon } from "../chooseIcon/WeatherIcon";

export function Next5DComp({ weatherObj }: {
    // DayMapArr not DayMap
    // As an array, it'd be easier to access the properties by indexing
    weatherObj: DayMapArrFormat
}) {
    const date = weatherObj[0]
    const weatherData = weatherObj[1]

    const { highest, lowest, forecastObjects } = weatherData

    // Just use the "middle of the day" weather icon
    const mid = Math.round(forecastObjects.length / 2)
    const forecastObj = forecastObjects[mid]

    return (
        <ul className='flex flexDirectionColumn gap centerItems'>
            <li>{date}</li>
            <li><WeatherIcon weatherObj={forecastObj} forecastType="next5D" /></li>
            <li>{lowest}</li>
            <li>{highest}</li>
        </ul>
    )
}
