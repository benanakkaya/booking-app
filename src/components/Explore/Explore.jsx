import React from 'react'
import { containerVariant, itemVariant } from '../../App';
import {motion} from "framer-motion"

const Explore = () => {
  return (
<motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    variants={containerVariant} className='container w-full p-[20px] flex items-center flex-col gap-[16px]'>
        <motion.div variants={itemVariant}>
        <h5 className='text-center font-bold text-[28px] leading-[140%]'>Explore the world with My Dream place</h5>
        </motion.div>
        <motion.div  variants={itemVariant}>
        <a href='/' className='items-center text-primary leading-[140%] tracking-[0.32px]'>Discover new places and experiences</a>
        </motion.div>
    </motion.div>
  )
}

export default Explore
