
import React from 'react'
import Link from "next/link";
import Challenge1 from '@/solutation/challenge1';
import Challenge2 from '@/solutation/challenge2';
import Challenge3 from '@/solutation/challenge3';

export default function Sidebar() {
  

  const mainList = [
    {
      id:1,
      name: "Challenge1'e git",
      component: <Challenge1/>
    },
    {
      id:2,
      name: "Challenge2'e git",
      component: <Challenge2/>
    },
    {
      id:3,
      name: "Challenge3'e git",
      component: <Challenge3/>
    }
  ]
  return (
    <div>
      <aside className="relative h-screen border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6">

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="text-sm flex flex-col pl-2">
          {
           mainList.map((mainLi, index) => (
            <Link
            className={`px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors`}
            href={`solutation/${mainLi.id}`}
          >
            {mainLi.name}
           </Link>
            ))
          }
            
            
          </div>
        </div>
        
      </nav>
    </aside>
    </div>
  )
}
