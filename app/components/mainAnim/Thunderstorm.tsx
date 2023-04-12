import Lightning from "../subAnim/Lightning"
import Cloud from "./Cloud"
import PositionDiv from "../subAnim/PositionDiv"

export default function ThunderStorm(props: IconProps){

    return (
        <PositionDiv {...props}>
            <Lightning size={0.75} moveY={100}/>
            <Cloud fillColor="grey"/>
        </PositionDiv>
    )
}