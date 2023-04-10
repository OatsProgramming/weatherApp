'use client'

import { LazyMotion, m } from "framer-motion"
import { useState } from "react"
import Droplets from "../subAnim/Droplets"
import { sandboxWidth, sandboxHeight } from "../subAnim/variables"
import Cloud from "./Cloud"

export default function Precipitation(props: IconProps){
    const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    const rainDrops = [1, 1.5, 2]
    const children = props.children

    // To account for increase of raindrops if wanted
    const size = 0.75 / rainDrops.length

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
                {rainDrops.map(droplet => (
                    <Droplets
                    key={droplet}
                    size={size}
                    moveX={100 * droplet}
                    moveY={175}
                    animateNow={props.animateNow ?? animate}
                    >
                        {children}
                    </Droplets>
                    ))}
                <Cloud animateNow={props.animateNow} fillColor="grey"/>
            </m.div>
        </LazyMotion>
    )
}