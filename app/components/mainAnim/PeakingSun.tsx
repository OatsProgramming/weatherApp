import Cloud from "./Cloud"
import Sun from "./Sun"
import PositionDiv from "../subAnim/PositionDiv"

export default function PeakingSun(props: IconProps) {
    return (
        <PositionDiv {...props}>
            <Sun moveX={35} moveY={-13} />
            <Cloud moveX={-25} moveY={12} />
        </PositionDiv>
    )
}