'use client'
import BlogSlider from '@/components/blog-slider/BlogSlider';
import FeaturedPosts from '@/components/featured-posts/FeaturedPosts';
import React from 'react';
const page = () => {

  return (
    <main>
      <BlogSlider />
      <FeaturedPosts />
    </main>
  )
}

export default page