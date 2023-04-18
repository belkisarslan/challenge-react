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
    return <img className='' src={source?.src} alt={source?.alt}/>
}

ArticleItem.Subtitle = function ArticleSubtitle({children}){
return <span>{children}</span>
}

ArticleItem.Title = function ArticleTitle({children}){
    return <h4>{children}</h4>
}

ArticleItem.Description = function ArticleDescription({children}){
    return <p>{children}</p>
}