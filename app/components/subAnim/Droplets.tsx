import { LazyMotion, m } from "framer-motion";

const containerForSquares = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      }
    },
    onDisplay: {opacity: 1},
  }
  
const dropping = {
  hidden: { 
      y: 0,
      scale: 1, 
  },
  show: { 
      y: 500,
      scale: 0,
      transition:{
          duration: 5,
          repeat: Infinity,
      }
  },
  onDisplay:{
    y: 175,
    scale: 1,
  }
}


export default function Droplets(props: IconProps){
    const loadFeatures = () => import('../../../lib/animation/domAnimation').then(mod => mod.default)

    // frequency array length === dropping.show.transition.duration 
    const frequency = [0, 1, 2, 3, 4] 

    // children variable is added so that precipitation can be anything desired
    const children = props.children ?? <m.div className="droppingSquares" style={{backgroundColor: props.fillColor}} />
    
    let animateNow: 'show' | '';
    let hoverNow: 'show' | '' = 'show'
    let onDisplayLabel: 'onDisplay' | 'hidden' = 'onDisplay'

    if (props.animateNow) {
        animateNow = 'show'
        hoverNow = ''
        onDisplayLabel = 'hidden'
    } 


    return (
        <LazyMotion features={loadFeatures} strict>
            <m.div className='positionAbsolute'
            style={{
                x: props.moveX,
                y: props.moveY,
                scale: props.size,
                rotate: props.rotate,
            }}
            initial={props.initial}
            animate={props.animate}
            exit={props.exit}
            >
                <m.ul
                {...props}
                className='containerForSquares'
                initial={onDisplayLabel}
                animate={animateNow!}
                whileHover={hoverNow}
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
            
            </m.div>
        </LazyMotion>
    )
}