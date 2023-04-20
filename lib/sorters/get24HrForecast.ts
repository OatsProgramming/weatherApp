import differenceInHours from 'date-fns/differenceInHours'

// Returns forecast within 24hr time span
export default function get24HrForecast(quintForecastObj: QuintWeeklyForecast){
    const forecastList = quintForecastObj.list
    const in24Hrs: ForecastObj[] = []
    
    for (let forecast of forecastList){
        // Account for data being in Unix time
        const difference = differenceInHours((forecast.dt * 1000), Date.now())

        // Only add the weather data that is within the 24 hour period (of 'now') to list
        if (difference <= 24 && difference >= 0) in24Hrs.push(forecast)
    }
    return in24Hrs
}