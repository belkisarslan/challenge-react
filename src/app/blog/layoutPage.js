
import React from 'react'

export default function LayoutPage({children}) {
  return (
    <div>
      <main className='max-w-7xl mx-auto'>{children}</main>
    </div>
  )
}
