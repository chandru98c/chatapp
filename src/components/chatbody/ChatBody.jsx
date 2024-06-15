import React from 'react'
import './chatbody.css'
import Nav from '../nav/Nav'
import Chatlist from '../chatlist/Chatlist'
import Msg from '../messagebox.jsx/Msg'
import Userinfo from '../user-informaiton/Userinfo'
export default function ChatBody() {
  return (
    <>
    <div className='chat-body-background'>
      
      <div className='chat-body-container'>
        <Nav/>
        <Chatlist/>
        <Msg/>
        <Userinfo/>

      </div>
      
    </div>
    </>
  )
}
