import React from 'react'

export default function Hero({children}) {
  return (
    <section className='py-24 px-8 text-center shadow-lg border-b border-gray-500'>{children}</section>
  )
}

Hero.Subtitle = function HeroSubtitle({ children }){
    return <h3 className='text-gray-400'>{children}</h3>
}

Hero.Title = function HeroTitle({ children }){
    return <h1 className='text-5xl text-gray-500 tracking-tight mt-3 font-semibold'>{children}</h1>
}

Hero.Description = function HeroDescription({ children }){
    return <p className='text-gray-400 text-xl leading-8 mt-6'>{children}</p>
}