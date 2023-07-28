import React, { useState } from 'react'
import { useRef } from 'react';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { BsPersonSquare } from 'react-icons/bs'
import {motion} from "framer-motion"

const Hero = () => {

  

    const today = new Date().toISOString().slice(0, 10);
    const [formValues,setFormValues] = useState({
        city: "",
        inDate: "",
        outDate: "",
        guests: ""
    })

    const inDateRef = useRef();
    const outDateRef = useRef();

    const handleInDate = (e) => {
        setFormValues(prev => ({...prev,inDate: e.target.value}));

    }
    const handleOutDate = (e) => {
        setFormValues(prev => ({...prev,outDate: e.target.value}));
        console.log(formValues);
    }

  return (
    <div className='container'>
      <div className="bg-[url('/src/assets/hero-bg.png')] bg-cover bg-no-repeat bg-center h-[500px] rounded-xl flex py-24 px-8 xl:p-0 xl:items-center justify-center">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex flex-col gap-[20px] text-white">
            <h2 className='text-center text-[32px] font-bold'>Enjoy Your Dream Vacation</h2>
            <p className='text-center'>Plan and book our perfect trip with expert advice, travel tips, destination <br className='hidden md:block'/> information and  inspiration from us.</p>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className='relative w-full flex items-center justify-center'>
        <form className='absolute  px-[12px] py-[10px] bg-white w-[90%] rounded-md  flex flex-col xl:flex-row items-center gap-[12px] shadow-lg'>
        <label className='flex w-full xl:w-[230px] items-center gap-[10px] bg-grey p-[12px] rounded-md text-grey-900  border-[1px] focus-within:border-primary'>
            <FaMapMarkerAlt />
            <input type="text" placeholder='Where are you going?' className='bg-transparent outline-none placeholder:text-grey-900' />
        </label>
        <label onClick={() => inDateRef.current.showPicker()} className='relative w-full xl:w-[230px] flex items-center gap-[10px] bg-grey p-[12px] rounded-md text-grey-900 border-[1px] focus-within:border-primary'>
            <FaRegCalendarAlt />
            {formValues.inDate ? new Date(formValues.inDate).toLocaleDateString("tr") : "Check in date"}
            <input min={today} onChange={(e) => handleInDate(e)} ref={inDateRef} type="date"  className='w-0 h-0' />
        </label>
        <label onClick={() => outDateRef.current.showPicker()} className='relative w-full xl:w-[230px] flex items-center gap-[10px] bg-grey p-[12px] rounded-md text-grey-900 border-[1px] focus-within:border-primary'>
            <FaRegCalendarAlt />
            {formValues.outDate ? new Date(formValues.outDate).toLocaleDateString("tr") : "Check in date"}
            <input min={formValues.outDate ? formValues.outDate : today} onChange={(e) => handleOutDate(e)} ref={outDateRef} type="date"  className='w-0 h-0' />
        </label>
        <label className='flex w-full xl:w-[230px] items-center gap-[10px] bg-grey p-[12px] rounded-md text-grey-900  border-[1px] focus-within:border-primary'>
            <BsPersonSquare />
            <input type="text" placeholder='Guests' className='bg-transparent outline-none placeholder:text-grey-900' />
        </label>
        <button type='button' className='px-[62.5px] py-[12px] w-full xl:w-auto bg-primary text-white hover:bg-opacity-80 transition-all duration-500 rounded-md'>Search</button>
        </form>
      </motion.div>
    </div>
  )
}

export default Hero
