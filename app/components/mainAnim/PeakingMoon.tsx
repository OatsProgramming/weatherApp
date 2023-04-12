import Cloud from "./Cloud"
import Moon from "./Moon"
import PositionDiv from "../subAnim/PositionDiv"

export default function PeakingMoon(props: IconProps) {

    return (
        <PositionDiv {...props}>
            <Moon moveX={35} moveY={-13} />
            <Cloud moveY={12} />
        </PositionDiv>
    )
}