"use client"
import React, { useState } from 'react'


export default function Reacting() {
    const [isActive, setIsActive] = useState(false);

    let backgroundClassName = 'w-full flex justify-center';
    let pictureClassName = 'border-8';
    if (isActive) {
      pictureClassName += ' border-purple-500';
    } else {
      backgroundClassName += ' bg-purple-500';
    }
  return (
    <div>
        <h3 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Reacting to Input with State</h3>
        <h4 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Challenge 1 of 3: Add and remove a CSS class</h4>
        <p className='text-center'><a target='_blank' className='p-3 pl-8 text-purple-500 text-l font-semibold leading-4' href='https://react.dev/learn/reacting-to-input-with-state'>Click for challenge page</a></p>
        <div className=' h-fit p-5 my-2 bg-gradient-to-r from-gray-800 flex flex-col items-center relative'>
        <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
        </div>
    </div>
  )
}
