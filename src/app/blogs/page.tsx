'use client'
import BlogSlider from '@/components/blog-slider/BlogSlider';
import FeaturedPosts from '@/components/featured-posts/FeaturedPosts';
import Reviewerchoice from '@/components/reviewer-choice/Reviewerchoice';
import React from 'react';
const page = () => {

  return (
    <main>
      <BlogSlider />
      <FeaturedPosts />
      <Reviewerchoice />
    </main>
  )
}

export default page