import React from 'react'
import './chatitem.css'
import p1 from '../../assets/images/p1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'
import p4 from '../../assets/images/p4.png'
import p5 from '../../assets/images/p5.jpg'
import p6 from '../../assets/images/p6.jpg'
import p7 from '../../assets/images/p7.png'
import p8 from '../../assets/images/p8.png'


const users = [
    { name: 'Gwen', img: p1, last_msg: 'whatsapp', last_seen: '7:30 pm' },
    { name: 'Peter', img: p2, last_msg: 'hii...', last_seen: '1:31 am' },
    { name: 'MJ', img: p8, last_msg: 'i knew it', last_seen: '6:30 am' },
    { name: 'Mark', img: p3, last_msg: 'yes', last_seen: '7:30 pm' },
    { name: 'Antony', img: p7, last_msg: 'ok', last_seen: '1:31 am' },
    { name: 'Clark', img: p4, last_msg: 'lol', last_seen: '6:30 am' },
    { name: 'Bruce', img: p6, last_msg: 'whatsapp', last_seen: '7:30 pm' },
    { name: 'ALfred', img: p5, last_msg: 'the city needs...', last_seen: '1:31 am' },
    { name: 'Mark', img: p3, last_msg: 'yes', last_seen: '7:30 pm' },
    { name: 'Antony', img: p7, last_msg: 'ok', last_seen: '1:31 am' },
    { name: 'Clark', img: p4, last_msg: 'lol', last_seen: '6:30 am' },
  
]
const chat_item = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', width: '100%' }


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
