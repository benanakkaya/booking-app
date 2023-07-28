import React from 'react';
import { containerVariant, itemVariant } from '../../App';
import imgPost1 from "../../assets/post1.png";
import imgPost2 from "../../assets/post2.png";
import imgPost3 from "../../assets/post3.png";
import PostCard from './components/PostCard';
import {motion} from "framer-motion"

const BlogPosts = () => {

    const posts = [
        {
            id:1,
            title:"Sydeny’s 10 most fashionable 5 star hotels",
            subtitle:"Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
            image: imgPost1
        },
        {
            id:2,
            title:"Top cities for Vegan Travellers",
            subtitle:"Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
            image: imgPost2
        },
        {
            id:3,
            title:"World’s top destinations during and post covid timeline",
            subtitle:"Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
            image: imgPost3
        },
    ]

  return (
    <motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariant} className="container flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[15px]">
        <h2 className="font-bold text-[28px]">Get inspiration for your next trip</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] ">
        {posts.map(post => (
          <motion.div key={post.id} variants={itemVariant}>
            <PostCard  post={post} />
            </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default BlogPosts
