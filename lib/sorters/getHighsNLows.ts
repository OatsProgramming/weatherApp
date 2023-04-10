// Besides the current weather, it doesnt give accurate highs and lows throughout a specific day
// Returns the highs n lows for those days
export default function getHighsNLows(quintForecastObj: QuintWeeklyForecast) {
    const forecastList = quintForecastObj.list
    
    // Create hash map
    const dayMap = {} as DayMap
    forecastList.map(forecast => {
        // Use the datestring as key for dayMap
        let date = new Date(forecast.dt * 1000)
        let day = date.toLocaleDateString()

        // Create the key/value pair if nonexistent
        if (!dayMap[day]) {
            dayMap[day] = { forecastObjects: [], highest: -Infinity, lowest: Infinity }
        }
        // Otherwise, append the new data
        dayMap[day].forecastObjects.push(forecast)
        // Update high/low if needed
        if (forecast.main.temp > dayMap[day].highest) dayMap[day].highest = forecast.main.temp
        if (forecast.main.temp < dayMap[day].lowest) dayMap[day].lowest = forecast.main.temp
    })
    return Object.entries(dayMap)
}