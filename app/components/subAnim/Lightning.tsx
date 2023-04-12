import { m } from 'framer-motion'
import { sandboxWidth, sandboxHeight } from './variables';
import PositionDiv from './PositionDiv';

const lightningVariant = {
    hidden: { pathLength: 0 },
    visible: {
        opacity: [0, 1, 1, 1, 0],
        pathLength: [0, 1, 1, 1, 1],
        pathSpacing: 0.25,
        transition: {
            delay: 1,
            duration: 10,
            repeat: Infinity,
        }
    },
    onDisplay: {
        pathLength: 1,
        opacity: 1,
    }
}

export default function Lightning(props: IconProps) {

    return (
        <PositionDiv {...props} isSubAnim>
            <m.svg className='lightning' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={sandboxWidth} height={sandboxHeight}>
                <m.path d="M356.0538024902344,28.699552536010742C356.0538024902344,28.699552536010742,285.2017822265625,173.0941619873047,285.2017822265625,173.0941619873047C285.2017822265625,173.0941619873047,458.29595947265625,171.30044555664062,458.29595947265625,171.30044555664062C458.29595947265625,171.30044555664062,381.1658935546875,342.60089111328125,381.1658935546875,342.60089111328125"
                    fill="none"
                    stroke="hsl(50, 98%, 50%)"
                    stroke-linecap="round"
                    transform="matrix(1,0,0,1,28.251129150390625,14.34977912902832)"
                    stroke-dasharray="0 0"
                    style={{
                        x: -200,
                        y: -20,
                        scale: 0.5,
                    }}
                    variants={lightningVariant}
                    initial='onDisplay'
                    animate='visible'
                />
                <defs>
                    <linearGradient id="SvgjsLinearGradient1000">
                        <stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop>
                        <stop stopColor="hsl(55, 84%, 57%)" offset="1"></stop>
                    </linearGradient>
                </defs>
            </m.svg>
        </PositionDiv>
    )
}