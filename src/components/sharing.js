"use client"
import React, { useState } from 'react'
import { foods, filterItems } from "@/app/exercise/data/sharingData"

export default function Sharing() {
   
    const [query, setQuery] = useState('');
    const results = filterItems(foods, query);
    const [isPaused, setIsPaused] = useState(false)
  
    function handleChange(e) {
      setQuery(e.target.value);
    }
  
  return (
    <div>
    <h3 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Sharing State Between Components</h3>
    <h4 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Challenge 2 of 2: Filtering a list</h4>
        <p className='text-center'><a target='_blank' className='p-3 pl-8 text-cyan-900 text-l font-semibold leading-4' href='https://react.dev/learn/sharing-state-between-components'>Click for challenge page</a></p>
    <div className='h-80 overflow-y-auto p-5 my-2 bg-gradient-to-r from-gray-800 flex flex-col items-center relative'>
    {isPaused ? (
        <p className='font-medium text-teal-500 m-1'>See you later!</p> 
      ) : (
        <SearchBar
        query={query}
        onChange={handleChange}
      />
      )}
       <label className='font-medium text-cyan-800 m-2'>
        <input className='w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
          type="checkbox"
          checked={isPaused}
          onChange={e => {
            setIsPaused(e.target.checked)
          }}
        />
        Are you tired? let's take a break
      </label>
      <hr />
      {results.length ? <List items={results} /> : <p className='text-red-300 mt-10'>~ Not Founded ~</p>}
    </div>
    </div>
  )
}

function SearchBar({ query, onChange }) {
    return (
      <label className='text-cyan-500'>
        Search:{' '}
        <input placeholder="Search for anything..." className='bg-gray-800 text-cyan-500 border-2 border-cyan-950 rounded-lg p-1 focus-cyan-600 focus:outline-none focus:border-cyan-600 focus:ring-cyan-600 focus:ring-1 sm:text-sm placeholder:italic placeholder:text-slate-400'
          value={query}
          onChange={onChange}
        />
      </label>
    );
}

function List({ items }) {
    return (
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <tbody> 
          {items.map(food => (
            <tr className='border-b' key={food.id}>
              <td className='px-6 py-4'>{food.name}</td>
              <td className='px-6 py-4'>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
  
  
