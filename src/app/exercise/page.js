import Hero from '@/components/hero'
import { State } from '@/components/state'
import React from 'react'

export default function Exercise() {
  return (
    <div>
      <Hero>
      <Hero.Subtitle>Exercise</Hero.Subtitle>
      <Hero.Title>Challenge React</Hero.Title>
      <Hero.Description>React.dev Challenge</Hero.Description>
     </Hero>

     <h2 className='p-3 pl-8 text-center text-gray-500 text-2xl font-semibold leading-8'>Exercises</h2>
     <div>
      <State/>
     </div>
    </div>
  )
}
