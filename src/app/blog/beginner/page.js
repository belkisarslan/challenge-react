"use client"
import React, { useEffect, useState } from 'react'
import data from "../data/data.json"

export default function Beginner() {

  const [tips, setTips] = useState([]);

  useEffect(() => {
      setTips(data.tips);
  }, []);

return (
    <div className='p-8 grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mt-4'>
       {tips.map(tip => (
        <div key={tip.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tip {tip.id}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{tip.content}</p>
        </div>
        ))}
    </div>
  )
}

