'use client'

import { useTime, m, MotionValue, useTransform } from "framer-motion";
import { sunAndMoonSize, sandboxWidth, sandboxHeight, centerXsvg, centerYsvg, sunAndMoonRadius } from "../subAnim/variables";
import PositionDiv from "../subAnim/PositionDiv";

const moonRingVariant = (time: MotionValue<number>) => {
    // Every 1 min rotate 360 deg
    let rotate: number | MotionValue<number> = useTransform(
        time,
        [0, 60_000],
        [0, 360],
        {clamp: false}
    )
    return ({rotate})
}

const expandVariant = {
    hidden: {
        scale: 0, opacity: 0,
    },
    visible: {
        scale: 1, opacity: 1,
    },
    transition: {
        type: 'spring'
    }
}

export default function Moon(props: IconProps){
    // const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    const time = useTime()
    const size = props.size ?? sunAndMoonSize

    // This icon requires state due to 'transform mapping' used in moonRingVariant
    const ring = moonRingVariant(time)

    return (
        <PositionDiv {...props} size={size}>
            <m.svg width={sandboxWidth} height={sandboxHeight}
                >
                  <m.circle
                    className="outerDashedCircle"
                    cx={centerXsvg}
                    cy={centerYsvg}
                    r={parseInt(sunAndMoonRadius) + 5 + '%'}
                    style={ring}
                    initial='hidden'
                    animate='visible'
                    variants={expandVariant}
                />
                  <m.circle
                    className="innerCircle"
                    cx={centerYsvg}
                    cy={centerYsvg}
                    r={sunAndMoonRadius}
                />
                </m.svg>
        </PositionDiv>
    )
}