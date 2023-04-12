import Droplets from "../subAnim/Droplets"
import Cloud from "./Cloud"
import PositionDiv from "../subAnim/PositionDiv"

export default function Precipitation(props: IconProps) {

    const rainDrops = [1, 1.5, 2]
    const children = props.children

    // To account for increase of raindrops if wanted
    const size = 0.75 / rainDrops.length

    return (
        <PositionDiv {...props}>
            {rainDrops.map(droplet => (
                <Droplets
                    key={droplet}
                    size={size}
                    moveX={100 * droplet}
                    moveY={175}
                >
                    {children}
                </Droplets>
            ))}
            <Cloud fillColor="grey" />
        </PositionDiv>
    )
}