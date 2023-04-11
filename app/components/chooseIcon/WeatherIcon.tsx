import chooseIcon from "@/app/components/chooseIcon/chooseIcon";

export function WeatherIcon({ weatherObj, forecastType } : { 
  weatherObj: ForecastObj;
  forecastType: 'current' | 'next24Hrs' | 'next5D'; 
}){

    const iconId = weatherObj.weather[0].icon as IconId

    let icon: JSX.Element;
    let className = 'weatherIconComponent positionRelative flex centerItems'
    switch(forecastType) {
      case 'current': {
        icon = chooseIcon(iconId, {moveX: '-33.5%'})                       
        className += ' currentWeatherIcon'
        break;
      }
      case 'next24Hrs': {
        icon = chooseIcon(iconId, {size: 0.4, moveX: '-34%', moveY: '-2%'})
        break;
      }
      case 'next5D': {
        icon = chooseIcon(iconId, {size: 0.5, moveX: '-33%', moveY: '-2%'})
        break;
      }
      default: {
        return <div>Unknown forecastType</div>
      }
    }
  
  
    return (
      <div className={className}>
        {icon}
      </div>
    )
  }