import Precipitation from "./Precipitation"
import Sun from "./Sun"
import PositionDiv from "../subAnim/PositionDiv"


export default function PeakingSunAndPrecipitation(props: IconProps) {

    return (
        <PositionDiv {...props}>
            <Sun moveX={35} moveY={-13} />
            <Precipitation moveX={-25} moveY={12} />
        </PositionDiv>
    )
}