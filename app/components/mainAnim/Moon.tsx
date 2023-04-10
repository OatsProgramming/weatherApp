'use client'

import { useTime, m, MotionValue, useTransform, LazyMotion } from "framer-motion";
import { useState } from "react";
import { sunAndMoonSize, sandboxWidth, sandboxHeight, centerXsvg, centerYsvg, sunAndMoonRadius } from "../subAnim/variables";

const moonRingVariant = (animateNow: boolean, time: MotionValue<number>) => {
    // Every 1 min rotate 360 deg
    let rotate: number | MotionValue<number> = useTransform(
        time,
        [0, 60_000],
        [0, 360],
        {clamp: false}
    )

    if (!animateNow) {
        rotate = 0
    }

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
    const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    const time = useTime()
    const size = props.size ?? sunAndMoonSize

    // This icon requires state due to 'transform mapping' used in moonRingVariant
    const [animate, setAnimate] = useState(false)
    const ring = moonRingVariant(props.animateNow ?? animate, time)

    let animateNow: 'visible' | '';
    let hoverNow: 'visible' | '' = 'visible'

    if (props.animateNow || animate){
        animateNow = 'visible'
        hoverNow = ''
    }
    
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
                <m.svg width={sandboxWidth} height={sandboxHeight}
                >
                  <m.circle
                    className="outerDashedCircle"
                    cx={centerXsvg}
                    cy={centerYsvg}
                    r={parseInt(sunAndMoonRadius) + 5 + '%'}
                    style={ring}
                    initial='hidden'
                    animate={animateNow!}
                    whileHover={hoverNow}
                    variants={expandVariant}
                />
                  <m.circle
                    className="innerCircle"
                    cx={centerYsvg}
                    cy={centerYsvg}
                    r={sunAndMoonRadius}
                />
                </m.svg>
            </m.div>
        </LazyMotion>
    )
}