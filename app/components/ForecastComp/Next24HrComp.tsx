import simplifyTime from "@/lib/simplifyTime"
import WeatherIcon from "../chooseIcon/WeatherIcon"

export default function Next24HrComp({ weatherObj }: {
    weatherObj: ForecastObj
}) {

    // Ex: "2022-08-30 15:00:00" -> 15
    const timestring = (+ weatherObj.dt_txt.slice(11, 13))

    // 15 -> "3PM"
    const time = simplifyTime(timestring)

    const temp = weatherObj.main.temp

    return (
        <ul className='flex flexDirectionColumn gap centerItems'>
          <li>{time}</li>
          <li><WeatherIcon weatherObj={weatherObj} forecastType="next24Hrs"/></li>
          <li>{temp}</li>
        </ul>
    )
}