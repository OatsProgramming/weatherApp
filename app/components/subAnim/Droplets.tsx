import { m } from "framer-motion";
import PositionDiv from "./PositionDiv";

const containerForSquares = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
        }
    },
    onDisplay: { opacity: 1 },
}

const dropping = {
    hidden: {
        y: 0,
        scale: 1,
    },
    show: {
        y: 500,
        scale: 0,
        transition: {
            duration: 5,
            repeat: Infinity,
        }
    },
    onDisplay: {
        y: 175,
        scale: 1,
    }
}


export default function Droplets(props: IconProps) {
    // frequency array length === dropping.show.transition.duration 
    const frequency = [0, 1, 2, 3, 4]

    // children variable is added so that precipitation can be anything desired
    const children = props.children ?? <m.div className="droppingSquares" style={{ backgroundColor: props.fillColor }} />

    return (
        <PositionDiv {...props} isSubAnim>
            <m.ul
                {...props}
                className='containerForSquares'
                initial='onDisplay'
                animate='show'
                variants={containerForSquares}
            >
                {frequency.map((value) => (
                    <m.li
                        key={value}
                        className='positionAbsolute flex centerItems'
                        variants={dropping}
                    >
                        {children}
                    </m.li>
                ))}
            </m.ul>
        </PositionDiv>
    )
}