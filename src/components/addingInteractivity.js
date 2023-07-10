"use client"
import { dataList } from '@/data/sculptureData';
import React, { useState } from 'react'

export const AddingInteractivity = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < dataList.length - 1;
    const hasPrev = index > 0
  
    function handleNextClick() {
      if (hasNext) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
    function handlePrevClick() {
        if(hasPrev){
         setIndex(index - 1)   
        }else if(index === 0){
         setIndex(11)
        }
      }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
  
    let sculpture = dataList[index];
  return (
    <>
    <h3 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Adding Interactivity</h3>
    <div className=' h-fit p-5 my-2 bg-gradient-to-r from-gray-800 flex flex-col items-center relative'>
    <div className='flex'>
    <button className='bg-gray-800 text-cyan-700 font-semibold py-2 px-4 rounded m-4 hover:shadow-lg hover:shadow-cyan-500/50' onClick={handlePrevClick}>
        Prev
    </button>
    <button className='bg-gray-800 text-cyan-700 font-semibold py-2 px-4 rounded m-4 hover:shadow-lg hover:shadow-cyan-500/50' onClick={handleNextClick}>
      Next
    </button>
    </div>
    <h2 className='text-cyan-700 font-semibold leading-8'>
      <i>{sculpture.name} </i>
      by {sculpture.artist}
    </h2>
    <h3 className='text-gray-500'>
      ({index + 1} of {dataList.length})
    </h3>
    <button className='bg-gray-800 text-cyan-700 font-semibold py-2 px-4 rounded m-4 hover:shadow-lg hover:shadow-cyan-500/50' onClick={handleMoreClick}>
      {showMore ? 'Hide' : 'Show'} details
    </button>
    {showMore && <p className='text-cyan-700 font-semibold leading-8 p-2'>{sculpture.description}</p>}
    <img className='h-48 w-96 rounded shadow-lg shadow-cyan-500/50 object-fill'
      src={sculpture.url}
      alt={sculpture.alt}
    />
    </div>
  </>
  )
}
