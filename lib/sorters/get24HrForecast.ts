import differenceInHours from 'date-fns/differenceInHours'

// Returns forecast within 24hr time span
export default function get24HrForecast(quintForecastObj: QuintWeeklyForecast){
    const forecastList = quintForecastObj.list
    const in24Hrs: ForecastObj[] = []
    
    for (let forecast of forecastList){
        // Account for data being in Unix time
        let forecastDate = new Date(forecast.dt * 1000)
        let current = new Date()

        const difference = differenceInHours(forecastDate, current)

        // Only add the weather data that is within the 24 hour period (of 'now') to list
        if (difference <= 24 ) in24Hrs.push(forecast)
    }
    return in24Hrs
}