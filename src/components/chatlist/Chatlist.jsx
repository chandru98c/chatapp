import React from 'react'
import './chatlist.css' 
import scope from '../../assets/images/zoom-dynamic-color.png'
import Chatitem from '../chatitems/Chatitem'
export default function Chatlist() {
  return (
    <>
    <div className='chat-list-container'>
    <div className='chat-list' style={{display:'flex', justifyContent:'space-between'}}>
        <img src={scope} alt="" style={{width:'50px'}}/>
          <input type="text" placeholder="Search For Answers" />
        </div>
        <Chatitem/>
    </div>
    </>
  )
}
