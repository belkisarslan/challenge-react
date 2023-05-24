"use client"
import React, { useReducer } from 'react'

function reducer(state, action){
 switch(action.type){
    case 'SET_TODO':
        return{
            ...state,
            todo: action.value
        }
    case 'ADD_TODO':
        return{
            ...state,
            todo: '',
            todos: [
                ...state.todos,
                action.todo
            ]
        }
 }
}
export default function reducerList() {
    
    const [state, dispatch] = useReducer(reducer, {
        todos: [],
        todo: ''
    })

    const submitHandle = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo
        })
    }

    const onChange = e => {
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    }


  return (
    <div className=' w-2/4 p-3 bg-gradient-to-l from-gray-800'>
    <div className='text-center text-gray-400 text-xl leading-8 mt-2 mb-2'>Reducer ile yapılan 'To Do List' örneği</div>
    <form className=' text-center' onSubmit={submitHandle}>
        <input className=' rounded bg-zinc-900 text-gray-400 border-solid border-2 border-gray-500 m-1 p-1 text-center' type='text' value={state.todo} onChange={onChange}/>
        <button className=' rounded bg-zinc-900 text-gray-400 border-solid border-2 m-1 p-1 border-gray-500 hover:text-gray-200 active:border-gray-200' disabled={!state.todo} type='submit'>Ekle</button>
    </form>
    <ol className=' ml-10 list-decimal'>
        {state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
            </li>
        ))}
    </ol>
    </div>
  )
}
