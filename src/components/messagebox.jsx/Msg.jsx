import React, { useState } from 'react';
import './msg.css';
import p1 from '../../assets/images/p1.png';

import tools from '../../assets/images/tool-dynamic-color.png';

export default function Msg() {
    const [input, setInputValue] = useState('');
    const [total_messages, setTotalMessages] = useState([]);


    const getValue = (e) => {
        setInputValue(e.target.value);
    };


    const addValue = () => {




        setTotalMessages([...total_messages, {
            id: new Date().toISOString(),
            msg: input,
            sent_time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
        }]);
        setInputValue('');
    };

    const deletemsg = (message) => {
        const resetTotalMessages = total_messages.filter(msg => msg.id !== message.id);
        setTotalMessages(resetTotalMessages);
    };



    return (
        <>
            <div className='msb-box-container'>

                <div className='msg-box-header'>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div className='user-icon'>

                            <img src={p1} alt="" />
                        </div>
                        <span>
                            <h4>Gwen</h4>
                            <p>typing...</p>
                        </span>
                    </div>
                    <div className='settings-icon'>
                        <img style={{ width: '50px' }} src={tools} alt="" />
                    </div>
                </div>

                <div className='message-container' >

                    
                    <div className='sent-messages r-msg'>
                        <p id='sent-msg'>Just heard the funniest joke, reminds me of that time in high school.</p>
                        <p id='sent-time'>7.30 pm</p>

                    </div>
                    <div className='sent-messages'>
                        <p id='sent-msg'>Oh, do share! I could use a laugh today.</p>
                        <p id='sent-time'>7:30 pm</p>
                    </div>

                    <div className='sent-messages r-msg'>
                        <p id='sent-msg'>Why don't scientists trust atoms?</p>
                        <p id='sent-time'>7.31 pm</p>

                    </div>
                    <div className='sent-messages'>
                        <p id='sent-msg'>I have no idea, why?.</p>
                        <p id='sent-time'>7:31 pm</p>
                    </div>
                    


                    {total_messages.map((message) => (
                        <div key={message.id} className='sent-messages'>
                            <p id='sent-msg'>{message.msg}</p>
                            <p id='sent-time'>{message.sent_time}</p>
                            <button onClick={() => deletemsg(message)}><i class='bx bxs-trash'></i></button>
                        </div>
                    ))}

                </div>
                <div className='input-field-container'>
                    <input
                        type="text"
                        placeholder='Enter Your Message'
                        value={input}
                        onChange={getValue}
                    />
                    <button onClick={addValue} disabled={!input}>
                        <i className='bx bx-chevrons-right'></i>
                    </button>
                </div>



            </div>
        </>
    );
}
