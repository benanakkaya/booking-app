import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import {FaPlaneDeparture} from "react-icons/fa"
import Nav from './components/Nav'

const Header = () => {



  return (
    <header className='container py-[20px] flex items-center justify-between border-b-[1px] '>
      <a href='/' className='text-2xl flex items-center gap-[10px]'>
      <FaPlaneDeparture className='text-primary font-bold' />
      Booking App
      </a>
      <Nav />
      <div className='hidden xl:flex items-center gap-[10px] '>
        <a href='/' className='px-[18px] py-[10px] border-[1px] border-primary text-primary rounded-md hover:bg-primary hover:text-white font-bold transition-all duration-500'>Register</a>
        <a href='/' className='px-[18px] py-[10px] border-[1px] bg-primary text-white rounded-md hover:border-primary hover:bg-opacity-80 font-bold transition-all duration-500'>Login</a>
      </div>
      <AiOutlineMenu className="cursor-pointer text-2xl xl:hidden"/>
    </header>
  )
}

export default Header
