import React from 'react'
import Hero from '../components/Hero/Hero'
import Alert from '../components/Alert/Alert'
import Vacation from '../components/VacationLocations/Vacation'
import BlogPosts from '../components/BlogPosts/BlogPosts'
import PopularHotels from '../components/PopularHotels/PopularHotels'
import MobileApp from '../components/MobileApp/MobileApp'
import Explore from '../components/Explore/Explore'

const Home = () => {
  return (
    <div className='flex flex-col gap-[40px]'>
      <Hero />
      <Alert />
      <Vacation />
      <BlogPosts />
      <PopularHotels />
      <MobileApp />
      <Explore />
    </div>
  )
}

export default Home
