import React from 'react'
import {AiOutlineWarning} from "react-icons/ai";

const Alert = () => {
  return (
<div className='container mt-[40px] bg-warning rounded-md p-[25px] flex items-center gap-[20px]'>
      <AiOutlineWarning />
      <p>
      Check the latest COVID-19 restrictions before you travel. <span><a href='/' className='text-primary'>Learn more</a></span>
      </p>
      </div>
  )
}

export default Alert
