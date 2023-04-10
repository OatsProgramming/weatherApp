'use client'

import { LazyMotion, m } from "framer-motion";
import { useState } from "react";

import Droplets from "../subAnim/Droplets";
import { sunAndMoonSize, sandboxWidth, sandboxHeight, centerXsvg, centerYsvg, sunAndMoonRadius } from "../subAnim/variables";

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
export default function Sun(props: IconProps){
    const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    const size = props.size ?? sunAndMoonSize
    const sunRaysSize = 0.2
    const fillColor = props.fillColor ?? 'yellow'

    const angles = [0, 45, 90, 135, 180, 225, 270, 315]

    const [animate, setAnimate] = useState(false)

    return (
        <LazyMotion features={loadFeatures} strict>
            <m.div className='positionAbsolute'
            style={{
                x: props.moveX,
                y: props.moveY,
                scale: size,
                width: sandboxWidth,
                height: sandboxHeight,
               }}
            initial={props.initial}
            animate={props.animate}
            exit={props.exit}
            onPointerOver={() => setAnimate(true)}
            onPointerOut={() => setAnimate(false)}
            >
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
                    animateNow={props.animateNow ?? animate}
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
                   </m.div>
        </LazyMotion>
    )
}

