"use client"
import React from 'react'
import { useState, useContext } from 'react';
import { places } from './passingData/data';
import { getImageUrl } from './passingData/utils';
import { ImageSizeContext } from './passingData/Context';


export default function Passing() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
  return (
    <div>
        <h3 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Passing Data Deeply with Context</h3>
        <h4 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Challenge 1 of 1: Replace prop drilling with context</h4>
        <p className='text-center'><a target='_blank' className='p-3 pl-8 text-cyan-900 text-l font-semibold leading-4' href='https://react.dev/learn/passing-data-deeply-with-context'>Click for challenge page</a></p>
        <div className=' h-fit p-5 my-2 bg-gradient-to-r from-gray-800 flex flex-col justify-center relative'>
        <ImageSizeContext.Provider
      value={imageSize}
    >
      <label>
        <input className='ml-1 mr-1'
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
        </div>
    </div>
  )
}

function List() {
    const listItems = places.map(place =>
      <li className='flex m-1' key={place.id}>
        <Place place={place} />
      </li>
    );
    return <ul>{listItems}</ul>;
  }
  
  function Place({ place }) {
    return (
      <>
        <PlaceImage place={place} />
        <p className='ml-2'>
          <b>{place.name}</b>
          {': ' + place.description}
        </p>
      </>
    );
  }
  
  function PlaceImage({ place }) {
    const imageSize = useContext(ImageSizeContext);
    return (
      <img className='m-1 rounded'
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    );
  }
  