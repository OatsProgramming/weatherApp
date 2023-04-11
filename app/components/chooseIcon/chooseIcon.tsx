import dynamic from "next/dynamic"

export default function chooseIcon(iconId: IconId, config?: ConfigureIcon){
    let iconName: string;

    switch (iconId){
        case '01d':{
            iconName = 'Sun'
            break;
        }
        case '01n':{
            iconName = 'Moon'
            break;
        }
        case '02d':{
            iconName = 'PeakingSun'
            break;
        }
        case '02n':{
            iconName = 'PeakingMoon'
            break;
        }
        case '03d': 
        case '03n': 
        case '04d': 
        case '04n':{
            iconName = 'Cloud'
            break;
        }
        case '09d': 
        case '09n':{
            iconName = 'Precipitation'
            break;
        }
        case '10d':{
            iconName = 'PeakingSunAndPrecipitation'
            break;
        }
        case '10n':{
            iconName = 'PeakingMoonAndPrecipitation'
            break;
        }
        case '11d': 
        case '11n':{
            iconName = 'Thunderstorm'
            break;
        }
        case '13d': 
        case '13n':{
            iconName = 'Snowfall'
            break;
        }
        case '50d': 
        case '50n':{
            // Create mist icon later
            iconName = 'Sun'
            break;
        }
        default:{
            <div> Unknown Icon ID </div>
        }
    } 
    const WeatherIcon = dynamic<IconProps>(() => 
        import(`@/app/components/mainAnim/${iconName}`)
    )
    return <WeatherIcon animateNow {...config}/>
}