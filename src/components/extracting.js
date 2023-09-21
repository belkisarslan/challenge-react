"use client"
import React from 'react'
import { useReducer } from 'react';
import Chat from './extractingState/chat';
import ContactList from './extractingState/contactList';
import { initialState, messengerReducer } from './extractingState/messengerReducer';

export default function Extracting() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
         <h3 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Extracting State Logic into a Reducer</h3>
        <h4 className='p-3 pl-8 text-center text-gray-500 text-xl font-semibold leading-8'>Challenge 2 of 4: Clear the input on sending a message </h4>
        <p className='text-center'><a target='_blank' className='p-3 pl-8 text-cyan-900 text-l font-semibold leading-4' href='https://react.dev/learn/extracting-state-logic-into-a-reducer'>Click for challenge page</a></p>
        <div className=' h-fit p-5 my-2 bg-gradient-to-r from-gray-800 flex justify-center relative'>
        <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
        </div>
    </div>
  )
}

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
  ];
