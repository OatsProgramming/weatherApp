import { LazyMotion, m } from "framer-motion";
import { sandboxWidth, sandboxHeight, centerXsvg, centerYsvg } from "../subAnim/variables";

const breathing = {
    'exhale': {scale: 10},
    'inhale': {
        scale: [10, 11, 10],
        transition:{
            type: 'spring',
            duration: 10,
            repeat: Infinity,
        }
    },
}

export default function Cloud(props: IconProps){
    const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    const fillColor = props.fillColor ?? 'hsla(197, 100%, 98%, 1)' 
    const size = props.size ?? 1

    let animateNow: 'inhale' | '';
    let hoverNow: 'inhale' | '' = 'inhale'

    if (props.animateNow) {
        animateNow = 'inhale'
        hoverNow = ''
    } 

    return (
        <LazyMotion features={loadFeatures} strict>
            <m.div
            className="positionAbsolute"
            style={{
                scale: size,
                x: props.moveX,
                y: props.moveY,
                width: sandboxWidth,
                height: sandboxHeight,
            }}
            initial={props.initial}
            animate={props.animate}
            exit={props.exit}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={sandboxWidth}
                    height={sandboxHeight}
                    fill={fillColor}
                >
                    <m.path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                    style={{
                        x: centerXsvg,
                        y: centerYsvg,
                        scale: 10,
                    }}
                    // inital='exhale'
                    animate={animateNow!}
                    whileHover={hoverNow}
                    variants={breathing}
                    />
                </svg>
            </m.div>
        </LazyMotion>
    )
}