import React from 'react'
import Link from "next/link"

export default function ArticleItem({children, path}) {
  return (
    <Link href={path}>
    <article>{children}</article>
    </Link>
  )
}

ArticleItem.Image = function ArticleImage({source}){
    return <div className='w-full overflow-hidden rounded-md'>
      <img className='w-full h-full object-cover object-center' src={source?.src} alt={source?.alt}/>
    </div>
}

ArticleItem.Subtitle = function ArticleSubtitle({children}){
return <span className='pl-1 text-gray-900 font-semibold text-sm leading-5 mt-4 block'>{children}</span>
}

ArticleItem.Title = function ArticleTitle({children}){
    return <h3 className='pl-1 font-semibold leading-8 text-2xl text-gray-400 mt-1'>{children}</h3>
}

ArticleItem.Description = function ArticleDescription({children}){
    return <p className='pl-1 mt-2 text-gray-500 text-base leading-6'>{children}</p>
}