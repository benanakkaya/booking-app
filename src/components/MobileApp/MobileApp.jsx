import React from 'react';
import { containerVariant, itemVariant } from '../../App';
import imgSmartphone from "../../assets/smartphone.png"
import {motion} from "framer-motion"

const MobileApp = () => {
  return (
    <motion.div initial="offscreen" className='container'
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariant} >
    <div className="relative bg-[url('/src/assets/mobileAppBg.png')] rounded-md h-[300px] bg-cover bg-no-repeat container overflow-hidden">
      <motion.div variants={itemVariant}>
      <img src={imgSmartphone} className="w-[720px] h-[516px] absolute -right-[25%] xl:right-0 -bottom-[120px]  -rotate-[15deg]" alt="mobile app" />
      </motion.div>
      <motion.div variants={itemVariant} className='h-[300px] w-[50%] xl:w-full flex flex-col justify-center xl:px-[69px] xl:py-[64px]'>
        <div className='flex flex-col gap-[30px]'>
        <strong className='text-[20px] md:text-[24px] xl:text-[28px] font-bold leading-[140%] text-white'>Download the mobile application for bonus <br/> coupons and travel codes</strong>
        <button className='w-[180px] py-[12px] bg-primary rounded-md z-10 text-white hover:bg-opacity-80'>Download mobile app</button>
        </div>
    </motion.div>
    </div>
    </motion.div>
  )
}

export default MobileApp
