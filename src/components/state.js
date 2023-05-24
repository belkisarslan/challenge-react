"use client"
import React, { useState } from 'react'

export const State = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  const submitHandle = e => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo("")
  }
  
  return (
    <div className=' w-2/4 border-r border-gray-500 p-3 bg-gradient-to-r from-gray-800'>
    <div className='text-center text-gray-400 text-xl leading-8 mt-2 mb-2'>State ile yapılan 'To Do List' örneği</div>
    <form className=' text-center' onSubmit={submitHandle}>
        <input className=' rounded bg-zinc-900 text-gray-400 border-solid border-2 border-gray-500 m-1 p-1 text-center' type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button className=' rounded bg-zinc-900 text-gray-400 border-solid border-2 m-1 p-1 border-gray-500 hover:text-gray-200 active:border-gray-200' disabled={!todo} type='submit'>Ekle</button>
    </form>
    <ol className=' ml-10 list-decimal'>
        {todos.map((todo, index) => (
            <li key={index}>
              {todo}
            </li>
        ))}
    </ol>
    </div>
  )
}
