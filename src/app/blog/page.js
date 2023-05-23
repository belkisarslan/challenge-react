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
          src: "https://picsum.photos/id/2/300/200",
          alt: "foto"
        }}/>
        <ArticleItem.Subtitle>18.04.23</ArticleItem.Subtitle>
        <ArticleItem.Title>başlık 1</ArticleItem.Title>
        <ArticleItem.Description>açıklama 1</ArticleItem.Description>
      </ArticleItem>
      <ArticleItem path="/">
        <ArticleItem.Image source={{
          src: "https://picsum.photos/id/7/300/200",
          alt: "foto"
        }}/>
        <ArticleItem.Subtitle>18.04.23</ArticleItem.Subtitle>
        <ArticleItem.Title>başlık 1</ArticleItem.Title>
        <ArticleItem.Description>açıklama 1</ArticleItem.Description>
      </ArticleItem>
      <ArticleItem path="/">
        <ArticleItem.Image source={{
          src: "https://picsum.photos/id/4/300/200",
          alt: "foto"
        }}/>
        <ArticleItem.Subtitle>18.04.23</ArticleItem.Subtitle>
        <ArticleItem.Title>başlık 1</ArticleItem.Title>
        <ArticleItem.Description>açıklama 1</ArticleItem.Description>
      </ArticleItem>
     </div>
     <div>
     </div>
    </div>
  )
}
