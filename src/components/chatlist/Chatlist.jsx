import React from 'react'
import './chatlist.css' 
import scope from '../../assets/images/zoom-dynamic-color.png'
export default function Chatlist() {
  return (
    <>
    <div className='chat-list-container'>
    <div style={{display:'flex', justifyContent:'space-between'}}>
        <img src={scope} alt="" style={{width:'50px'}}/>
          <input type="text" placeholder="Search For Answers" />
        </div>
    </div>
    </>
  )
}
