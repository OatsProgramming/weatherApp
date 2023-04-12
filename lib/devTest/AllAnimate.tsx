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

export default function AllAnimate(){
    return (
        <div className="positionRelative">
            <div className="positionRelative iconBox">
                <Sun />
            </div>
            <div className="positionRelative iconBox">
                <Cloud />
            </div>
            <div className="positionRelative iconBox">
                <PeakingSun />
            </div>
            <div className="positionRelative iconBox">
                <PeakingSunAndPrecipitation />
            </div>
            <div className="positionRelative iconBox">
                <Precipitation />
            </div>
            <div className="positionRelative iconBox">
                <Moon />
            </div>
            <div className="positionRelative iconBox">
                <PeakingMoon />
            </div>
            <div className="positionRelative iconBox">
                <PeakingMoonAndPrecipitation />
            </div>
            <div className="positionRelative iconBox">
                <ThunderStorm />
            </div>
            <div className="positionRelative iconBox">
                <SnowFall />
            </div>
        </div>
    )
}