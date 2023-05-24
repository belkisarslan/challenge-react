"use client"
import React, { useState } from 'react'

export const State = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  const submitHandle = e => {
    e.preventDefault()
    setTodos([...todos, todo])
  }
  
  return (
    <>
    <div>State ile yapılan to do list</div>
    <form onSubmit={submitHandle}>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button disabled={!todo} type='submit'>Ekle</button>
    </form>
    <ul>
        {todos.map((todo, index) => (
            <li key={index}>
              {todo}
            </li>
        ))}
    </ul>
    </>
  )
}
