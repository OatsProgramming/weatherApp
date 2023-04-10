'use client'

import { LazyMotion, m } from "framer-motion"
import { useState } from "react"
import { sandboxWidth, sandboxHeight } from "../subAnim/variables"
import Moon from "./Moon"
import Precipitation from "./Precipitation"


export default function PeakingMoonAndPrecipitation(props: IconProps){
    const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    const [animate, setAnimate] = useState(false)

    return (
        <LazyMotion features={loadFeatures} strict>
            <m.div className='positionAbsolute'
            style={{
                x: props.moveX,
                y: props.moveY,
                scale: props.size,
                width: sandboxWidth,
                height: sandboxHeight,
               }}
            initial={props.initial}
            animate={props.animate}
            exit={props.exit}
            onPointerOver={() => setAnimate(true)}
            onPointerOut={() => setAnimate(false)}
            >
                <Moon animateNow={props.animateNow ?? animate} moveX={35} moveY={-13}/>
                <Precipitation animateNow={props.animateNow} moveX={-25} moveY={12}/>
            </m.div>
        </LazyMotion>
    )
}
