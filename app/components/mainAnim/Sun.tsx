import Droplets from "../subAnim/Droplets";
import { sunAndMoonSize, sandboxWidth, sandboxHeight, centerXsvg, centerYsvg, sunAndMoonRadius } from "../subAnim/variables";
import PositionDiv from "../subAnim/PositionDiv";

/*
For "single" animated icons (e.g Droplets / Cloud): 
    Configure the 'initial' / 'animate' prop of targeted animation w/ altering values ('LABEL_NAME' || '')

For "compound" animated icons (e.g Sun / PeakingSun):
    Configure w/ 'animate/setAnimate' state
        this will help decide whether it should animate based on hover
        or with props.animateNow if given
    
    animateNow={props.animateNow ?? animate}
        This checks if props.animateNow is null or not
        Cloud component only needs props.animateNow
*/


// Main Animations
export default function Sun(props: IconProps) {
    // const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    const size = props.size ?? sunAndMoonSize
    const sunRaysSize = 0.2
    const fillColor = props.fillColor ?? 'yellow'

    const angles = [0, 45, 90, 135, 180, 225, 270, 315]

    return (
        <PositionDiv {...props} size={size}>
            {/* Sun rays essentially */}
            {angles.map((angle) => (
                <Droplets
                    fillColor={fillColor}
                    key={angle}
                    style={{
                        x: 150,
                        y: 150,
                        scale: sunRaysSize,
                        rotate: angle,
                        zIndex: -1,
                    }}
                />
            ))}
            <svg
                width={sandboxWidth}
                height={sandboxHeight}
            >
                <circle
                    style={{
                        zIndex: 1,
                    }}
                    cx={centerXsvg}
                    cy={centerYsvg}
                    r={sunAndMoonRadius}
                    fill={fillColor}
                />
            </svg>
        </PositionDiv>
    )
}

