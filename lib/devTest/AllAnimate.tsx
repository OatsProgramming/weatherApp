import Cloud from "@/app/components/mainAnim/Cloud";
import Moon from "@/app/components/mainAnim/Moon";
import PeakingMoon from "@/app/components/mainAnim/PeakingMoon";
import PeakingMoonAndPrecipitation from "@/app/components/mainAnim/PeakingMoonAndPrecipitation";
import PeakingSun from "@/app/components/mainAnim/PeakingSun";
import PeakingSunAndPrecipitation from "@/app/components/mainAnim/PeakingSunAndPrecipitation";
import Precipitation from "@/app/components/mainAnim/Precipitation";
import SnowFall from "@/app/components/mainAnim/Snowfall";
import Sun from "@/app/components/mainAnim/Sun";
import ThunderStorm from "@/app/components/mainAnim/Thunderstorm";


export function AllAnimate(){
    return (
        <div className="positionRelative">
            <div className="positionRelative iconBox">
                <Sun animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <Cloud animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <PeakingSun animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <PeakingSunAndPrecipitation animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <Precipitation animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <Moon animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <PeakingMoon animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <PeakingMoonAndPrecipitation animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <ThunderStorm animateNow/>
            </div>
            <div className="positionRelative iconBox">
                <SnowFall animateNow/>
            </div>
        </div>
    )
}

