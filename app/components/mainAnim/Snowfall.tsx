import { LazyMotion, m } from "framer-motion";
import Snow from "../subAnim/Snow";
import { sandboxWidth, sandboxHeight } from "../subAnim/variables";
import Precipitation from "./Precipitation";

export default function SnowFall(props: IconProps){
    const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

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
            >
                <Precipitation animateNow={props.animateNow}>
                    <Snow size={9} moveX={30} moveY={90}/>
                </Precipitation>
            </m.div>
        </LazyMotion>
    )
}