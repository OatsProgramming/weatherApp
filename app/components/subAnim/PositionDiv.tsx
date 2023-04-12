import { LazyMotion, m } from 'framer-motion'
import { sandboxWidth, sandboxHeight } from './variables'

export default function PositionDiv(props: PositionDivProps) {
    const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    return (
        <LazyMotion features={loadFeatures} strict>
            <m.div className='positionAbsolute'
                style={{
                    x: props.moveX,
                    y: props.moveY,
                    scale: props.size,
                    // Below is only for sub animations ( i.e droplets, lightning, snowfall )
                    width: props.isSubAnim ? 'none' : sandboxWidth,
                    height: props.isSubAnim ? 'none' : sandboxHeight,
                    rotate: props.isSubAnim ? props.rotate : 0
                   }}
                initial={props.initial}
                animate={props.animate}
                exit={props.exit}
                >
                    {props.children}
                </m.div>
        </LazyMotion>
    )
}