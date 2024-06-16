import React from 'react'
import './user_info.css' 
import p1 from '../../assets/images/p1.png'


export default function User_info() {
  return (
  <>
  
  <div className='user-info-container'>
    <div  className='user-info-elements'>
      <h3>Profile Info</h3>
      <img src={p1} style={{width:'140px'}} alt="" />
      <h2>Gwen</h2>
      <p>Online</p>

    </div>
    </div></>
  )
}
