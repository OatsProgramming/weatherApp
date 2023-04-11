// Besides the current weather, it doesnt give accurate highs and lows throughout a specific day
// Returns the highs n lows for those days
export default function getHighsNLows(quintForecastObj: QuintWeeklyForecast) {
    const forecastList = quintForecastObj.list
    
    // Create hash map
    const dayMap = {} as DayMap
    forecastList.map(forecast => {
        // Use the datestring as key for dayMap
        let date = forecast.dt_txt.slice(0, 10)

        // Create the key/value pair if nonexistent
        if (!dayMap[date]) {
            dayMap[date] = { forecastObjects: [], highest: -Infinity, lowest: Infinity }
        }
        // Otherwise, append the new data
        dayMap[date].forecastObjects.push(forecast)
        // Update high/low if needed
        if (forecast.main.temp > dayMap[date].highest) dayMap[date].highest = forecast.main.temp
        if (forecast.main.temp < dayMap[date].lowest) dayMap[date].lowest = forecast.main.temp
    })

    // for (let day of dayMap){
    //     day[0] = date
    //     day[1] = relevant weather data ( i.e forecastObjects, highest, lowest )
    // }

    // Convert it to an array to make the data more accessible
    // "date" prop can be anything; must use indexing
    return Object.entries(dayMap)
}