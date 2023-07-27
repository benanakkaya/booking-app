import React from 'react'

const LocationCard = ({location}) => {
  return (
    <div className='flex flex-col gap-[15px] group cursor-pointer'>
        <img className='group-hover:opacity-90 transition-all duration-500' src={location.image} />
        <div className='flex flex-col gap-[6px]'>
            <h4 className='text-xl font-bold'>{location.name}</h4>
            {location.propCount ? 
            <small className='text-sm '>{location.propCount} properties</small>
            : <small className='text-sm '>{location.location}</small>}
        </div>
    </div>
  )
}

export default LocationCard
