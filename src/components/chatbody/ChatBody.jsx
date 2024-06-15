import React from 'react'
import './chatbody.css'
import Nav from '../nav/Nav'
import Chatlist from '../chatlist/Chatlist'
export default function ChatBody() {
  return (
    <>
    <div className='chat-body-background'>
      
      <div className='chat-body-container'>
        <Nav/>
        <Chatlist/>

      </div>
      
    </div>
    </>
  )
}
