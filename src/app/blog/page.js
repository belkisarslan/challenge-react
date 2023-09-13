import ArticleItem from '@/components/articleitem'
import Hero from '@/components/hero'
import React from 'react'


export default function Blog() {

  return (
    <div>
      <Hero>
        <Hero.Subtitle>Blog</Hero.Subtitle>
        <Hero.Title>Challenge Blog</Hero.Title>
        <Hero.Description>This page contains tips from the React document.</Hero.Description>
      </Hero>

      <h2 className='p-3 pl-8 text-gray-500 text-2xl font-semibold leading-8'>Contents</h2>

      <div className='bg-gradient-to-r from-gray-800 p-8 grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mt-4'>

        <ArticleItem path="/blog/beginner/">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <ArticleItem.Image className="rounded-t-lg" source={{
              src: "https://images.pexels.com/photos/10951001/pexels-photo-10951001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "foto"
            }} />
            <div className="p-5">
            <ArticleItem.Subtitle>11.09.23</ArticleItem.Subtitle>
              <ArticleItem.Title>Beginner</ArticleItem.Title>
              <ArticleItem.Description>Beginner Level Tips</ArticleItem.Description>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-950 rounded-lg hover:bg-red-600">
                Read more
              </div>
            </div>
          </div>
        </ArticleItem>

        <ArticleItem path="/">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <ArticleItem.Image className="rounded-t-lg" source={{
               src: "https://images.pexels.com/photos/4095254/pexels-photo-4095254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
               alt: "foto"
            }} />
            <div className="p-5">
            <ArticleItem.Subtitle>-</ArticleItem.Subtitle>
            <ArticleItem.Title>Intermediate</ArticleItem.Title>
            <ArticleItem.Description>Intermediate Level Tips</ArticleItem.Description>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-950 rounded-lg hover:bg-red-600">
                Read more
              </div>
            </div>
          </div>
        </ArticleItem>

        <ArticleItem path="/">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <ArticleItem.Image className="rounded-t-lg" source={{
                src: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                alt: "foto"
            }} />
            <div className="p-5">
            <ArticleItem.Subtitle>-</ArticleItem.Subtitle>
              <ArticleItem.Title>Advanced</ArticleItem.Title>
              <ArticleItem.Description>Advanced Level Tips</ArticleItem.Description>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-950 rounded-lg hover:bg-red-600">
                Read more
              </div>
            </div>
          </div>
        </ArticleItem>
  
      </div>
      <div>
      </div>
    </div>
  )
}
