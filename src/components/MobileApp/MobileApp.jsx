import React from 'react';
import imgSmartphone from "../../assets/smartphone.png"

const MobileApp = () => {
  return (
    <div className="relative bg-[url('/src/assets/mobileAppBg.png')] rounded-md h-[300px] bg-cover bg-no-repeat container overflow-hidden">
      <img src={imgSmartphone} className="w-[720px] h-[516px] absolute right-0 -bottom-[120px]  -rotate-[15deg]" alt="mobile app" />
    <div className=' h-[300px] flex flex-col justify-center px-[69px] py-[64px]'>
        <div className='flex flex-col gap-[30px]'>
        <strong className='text-[28px] font-bold leading-[140%] text-white'>Download the mobile application for bonus <br/> coupons and travel codes</strong>
        <button className='w-[180px] py-[12px] bg-primary rounded-md text-white hover:bg-opacity-80'>Download mobile app</button>
        </div>
    </div>
    </div>
  )
}

export default MobileApp
