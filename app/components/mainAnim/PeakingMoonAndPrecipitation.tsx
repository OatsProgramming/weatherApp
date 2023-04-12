import Moon from "./Moon"
import Precipitation from "./Precipitation"
import PositionDiv from "../subAnim/PositionDiv"


export default function PeakingMoonAndPrecipitation(props: IconProps) {

    return (
        <PositionDiv {...props}>
            <Moon moveX={35} moveY={-13} />
            <Precipitation moveX={-25} moveY={12} />
        </PositionDiv>
    )
}
