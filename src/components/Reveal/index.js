import React, { useEffect, useRef } from 'react'
import {motion, useInView, useAnimationControls} from 'framer-motion'

const Reveal = ({children}) => {
    
    const scrollRef = useRef(null)
    const isInView = useInView(scrollRef)

    const mainControls = useAnimationControls()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        } else {
            mainControls.start('hidden')
        }
    }, [isInView])

  return (
    <div ref={scrollRef} style={{height: '100%'}}>
        <motion.div
            style={{height: '100%'}}
            variants={{
                hidden: {opacity: 0, y: 100},
                visible: {opacity:1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.2}}
        >
            {children} 
        </motion.div>
    </div>
  )
}

export default Reveal