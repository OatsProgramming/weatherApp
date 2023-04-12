import Moon from "../mainAnim/Moon";
import PeakingSun from "../mainAnim/PeakingSun";
import PeakingMoon from "../mainAnim/PeakingMoon";
import Cloud from "../mainAnim/Cloud";
import Precipitation from "../mainAnim/Precipitation";
import PeakingSunAndPrecipitation from "../mainAnim/PeakingSunAndPrecipitation";
import PeakingMoonAndPrecipitation from "../mainAnim/PeakingMoonAndPrecipitation";
import ThunderStorm from "../mainAnim/Thunderstorm";
import SnowFall from "../mainAnim/Snowfall";
import Sun from "../mainAnim/Sun";

export default function chooseIcon(iconId: IconId, config?: ConfigureIcon): JSX.Element{
    // let iconName: string;
    // Lazy loading components doesnt work at all for some reason ( dynamic() and lazy() )

    switch (iconId){
        case '01d':{
            
            return <Sun {...config}/>
        }
        case '01n':{
            
            return <Moon {...config}/>
        }
        case '02d':{
            
            return <PeakingSun {...config}/>
        }
        case '02n':{
            
            return <PeakingMoon {...config}/>
        }
        case '03d': 
        case '03n': 
        case '04d': 
        case '04n':{
            
            return <Cloud {...config}/>
        }
        case '09d': 
        case '09n':{
           
            return <Precipitation {...config}/>
        }
        case '10d':{
            
            return <PeakingSunAndPrecipitation {...config}/>
        }
        case '10n':{
            
            return <PeakingMoonAndPrecipitation {...config}/>
        }
        case '11d': 
        case '11n':{
            
            return <ThunderStorm {...config}/>
        }
        case '13d': 
        case '13n':{
            
            return <SnowFall {...config}/>
        }
        case '50d': 
        case '50n':{
            
            return <Sun {...config}/>
        }
        default:{
            <div> Unknown Icon ID </div>
        }
        return <div>Not working</div>
    } 
}
