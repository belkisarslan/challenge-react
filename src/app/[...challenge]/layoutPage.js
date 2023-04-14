import Sidebar from '@/components/sidebar'
import React from 'react'

export default function LayoutPage({children}) {
  return (
    <div>
      <Sidebar/>
      <main>{children}</main>
    </div>
  )
}
