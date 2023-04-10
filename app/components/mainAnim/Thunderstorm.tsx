'use client'

import { LazyMotion, m } from "framer-motion"
import { useState } from "react"
import Lightning from "../subAnim/Lightning"
import { sandboxWidth, sandboxHeight } from "../subAnim/variables"
import Cloud from "./Cloud"

export default function ThunderStorm(props: IconProps){
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
                <Lightning animateNow={props.animateNow ?? animate} size={0.75} moveY={100}/>
                <Cloud animateNow={props.animateNow} fillColor="grey"/>
            </m.div>
        </LazyMotion>
    )
}