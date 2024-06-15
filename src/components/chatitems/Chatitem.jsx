import React from 'react'
import './chatitem.css'
import p1 from '../../assets/images/p1.jpg'
import p2 from '../../assets/images/p2.jpg'
import p3 from '../../assets/images/p3.jpg'


const users = [
    { name: 'Gwen', img: p1, last_msg: 'image', last_seen: '7:30 pm' },
    { name: 'Peter', img: p2, last_msg: 'hii...', last_seen: '1:31 amm' },
    { name: 'MJ', img: p3, last_msg: 'i knew it', last_seen: '6:30 am' },
]
const chat_item = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', width: '100%' }


export default function Chatitem() {
    return (
        <>
            <div className='chat-item-container' style={chat_item} >

                {users.map((user) => (
                    <div className='chat_user_container' >
                        <div className='user_icon' ><img src={user.img} alt="" />
                            <span><h4>{user.name}</h4>
                                <p>{user.last_msg}</p>
                            </span>
                        </div>
                        <div style={{ marginBottom: '30px' }}><p>{user.last_seen}</p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}
