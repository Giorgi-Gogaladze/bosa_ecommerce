'use client'
import BlogSlider from '@/components/all-blogs/blog-slider/BlogSlider';
import FeaturedPosts from '@/components/all-blogs/featured-posts/FeaturedPosts';
import RecentPosts from '@/components/all-blogs/recent-posts/RecentPosts';
import Reviewerchoice from '@/components/all-blogs/reviewer-choice/Reviewerchoice';
import BlogScrollableCards from '@/components/all-blogs/scrollCards/BlogScrollableCards';
import React from 'react';
const page = () => {

  return (
    <main>
      <BlogSlider />
      <FeaturedPosts />
      <Reviewerchoice />
      <RecentPosts />
      <BlogScrollableCards />
    </main>
  )
}

export default page