import { AddingInteractivity } from '@/components/addingInteractivity'
import Hero from '@/components/hero'
import Reacting from '@/components/reacting'
import Reducer from '@/components/reducer'
import RenderingList from '@/components/renderingList'
import { State } from '@/components/state'
import React from 'react'
import "@/app/exercise/exercise.css"
import Sharing from '@/components/sharing'

export default function Exercise() {
  return (
    <>
    <div className="progress"></div>
    <div className="container">
      <Hero>
      <Hero.Subtitle>Exercise</Hero.Subtitle>
      <Hero.Title>Challenge React</Hero.Title>
      <Hero.Description>React.dev Challenge</Hero.Description>
     </Hero>

     <h2 className='p-3 pl-8 text-center text-gray-500 text-2xl font-semibold leading-8'>Exercises</h2>
     <h3 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>useState ve useReducer Kullanımı </h3>
     <div className='flex flex-auto'>
      <State/>
      <Reducer/>
     </div>

     <RenderingList/>
     <AddingInteractivity/>
     <Reacting/>
     <Sharing/>
    </div>
    </>
  )
}
