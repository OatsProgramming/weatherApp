import Snow from "../subAnim/Snow";
import Precipitation from "./Precipitation";
import PositionDiv from "../subAnim/PositionDiv";

export default function SnowFall(props: IconProps) {

    return (
        <PositionDiv {...props}>
            <Precipitation>
                <Snow size={9} moveX={30} moveY={90} />
            </Precipitation>
        </PositionDiv>
    )
}