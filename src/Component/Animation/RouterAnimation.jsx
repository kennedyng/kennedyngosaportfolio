
import { motion} from 'framer-motion/dist/framer-motion'

import React, { Children } from 'react'
const routerVariant = {
    hidden: {
      x: [-1500 ],
      
      transition: {
          duration: 1,
          type: "spring",
          stiffness: 20
      }
    },
    visible : {
          x: 0,
       
        transition: {
          duration: 2,
          type: "spring",
          stiffness: 20,
          delay: 1
      }

    },
    exit :{
       
       
          x: 1500,
        
        transition: {
          duration: 1,
          
      }
    }
}




export const RouterAnimation = (props) => {
  return (
    <motion.div variants={routerVariant} initial="hidden" animate="visible" exit="exit" >
        {props.children}
    </motion.div>
  )
}
