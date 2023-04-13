import WeatherIcon from "../chooseIcon/WeatherIcon";

export default function Next5DComp({ weatherObj }: {
    // DayMapArr not DayMap
    // As an array, it'd be easier to access the properties by indexing
    weatherObj: DayMapArrFormat
}) {
    
    const date = weatherObj[0]
    const weatherData = weatherObj[1]
    
    const weekDayFormat = new Intl.DateTimeFormat(undefined, { 
        weekday: 'long'
    })

    const day = weekDayFormat.format(new Date(date))

    const { highest, lowest, forecastObjects } = weatherData
    const [ highs, lows ] = [Math.round(highest), Math.round(lowest)]   

    // Just use the "middle of the day" weather icon
    const mid = Math.round(forecastObjects.length / 2)
    const forecastObj = forecastObjects[mid]

    return (
        <ul className='flex flexDirectionColumn gap centerItems' style={{
            padding: '0.5rem'
        }}>
            <li>{day}</li>
            <li><WeatherIcon weatherObj={forecastObj} forecastType="next5D" /></li>
            <li>{lows}°</li>
            <li>{highs}°</li>
        </ul>
    )
}
