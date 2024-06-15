import React from 'react'
import './nav.css' 
import chatIcon from '../../assets/images/chat-text-dynamic-color.png'
import settingsIcon from '../../assets/images/setting-dynamic-color.png'
import boyIcon from '../../assets/images/boy-dynamic-color.png'

export default function Nav() {



  return (
  <>
  <div className='nav-container'>
<div className='nav-chat-icon'>
    <img src={chatIcon} alt="" />

</div>
<div style={{display:'flex',flexDirection:'column',gap:'4px'}}>
<div className='nav-settings-icon'>
    <img src={settingsIcon} alt="" />
    </div><div className='nav-settings-icon'>
    <img src={boyIcon} alt="" />
</div></div>

  </div>
  
  </>
  )
}
