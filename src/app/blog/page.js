import ArticleItem from '@/components/articleitem'
import Hero from '@/components/hero'

import React from 'react'





export default function Blog() {
  
  return (
    <div>
     <Hero>
      <Hero.Subtitle>Blog</Hero.Subtitle>
      <Hero.Title>Challenge Blog</Hero.Title>
      <Hero.Description>React.dev Challenge</Hero.Description>
     </Hero>

     <h2 className='p-3 pl-8 text-gray-500 text-2xl font-semibold leading-8'>Contents</h2>

     <div className='bg-gradient-to-r from-gray-800 p-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mt-4'>
      <ArticleItem path="/">
        <ArticleItem.Image source={{
          src: "https://images.pexels.com/photos/1019470/abacus-mathematics-addition-subtraction-1019470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "foto"
        }}/>
        <ArticleItem.Subtitle>11.09.23</ArticleItem.Subtitle>
        <ArticleItem.Title>Beginner</ArticleItem.Title>
        <ArticleItem.Description>Beginner Level Tips</ArticleItem.Description>
      </ArticleItem>
      <ArticleItem path="/">
        <ArticleItem.Image source={{
          src: "https://images.pexels.com/photos/5650630/pexels-photo-5650630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "foto"
        }}/>
        <ArticleItem.Subtitle>-</ArticleItem.Subtitle>
        <ArticleItem.Title>Intermediate</ArticleItem.Title>
        <ArticleItem.Description>Intermediate Level Tips</ArticleItem.Description>
      </ArticleItem>
      <ArticleItem path="/">
        <ArticleItem.Image source={{
          src: "https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "foto"
        }}/>
        <ArticleItem.Subtitle>-</ArticleItem.Subtitle>
        <ArticleItem.Title>Advanced</ArticleItem.Title>
        <ArticleItem.Description>Advanced Level Tips</ArticleItem.Description>
      </ArticleItem>
     </div>
     <div>
     </div>
    </div>
  )
}
