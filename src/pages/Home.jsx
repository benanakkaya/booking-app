import React from 'react'
import Hero from '../components/Hero/Hero'
import Alert from '../components/Alert/Alert'
import Vacation from '../components/VacationLocations/Vacation'
import BlogPosts from '../components/BlogPosts/BlogPosts'
import PopularHotels from '../components/PopularHotels/PopularHotels'
import MobileApp from '../components/MobileApp/MobileApp'

const Home = () => {
  return (
    <div className='flex flex-col gap-[40px]'>
      <Hero />
      <Alert />
      <Vacation />
      <BlogPosts />
      <PopularHotels />
      <MobileApp />
      <div>asdas</div>
    </div>
  )
}

export default Home
