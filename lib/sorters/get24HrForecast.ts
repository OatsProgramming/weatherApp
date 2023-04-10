// Returns forecast within 24hr time span
export default function get24HrForecast(quintForecastObj: QuintWeeklyForecast){
    const forecastList = quintForecastObj.list
    const in24Hrs: ForecastObj[] = []
    
    for (let forecast of forecastList){
        let forecastDate: Date = new Date(forecast.dt * 1000)
        let forecastTime: number = forecastDate.getTime()

        // Only add the weather data that is within the 24 hour period (of 'now') to list
        if ((forecastTime - Date.now() < 8.64e+7) && (forecastTime >= Date.now())) in24Hrs.push(forecast)
    }

    return in24Hrs
}