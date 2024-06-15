import React, { useState } from 'react';
import './msg.css';
import p1 from '../../assets/images/p1.jpg';
import arrow from '../../assets/images/backward-dynamic-color.png';
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
                            <img src={arrow} alt="" />
                            <img src={p1} alt="" />
                        </div>
                        <span>
                            <h4>Gwen</h4>
                            <p>Offline</p>
                        </span>
                    </div>
                    <div className='settings-icon'>
                        <img style={{ width: '50px' }} src={tools} alt="" />
                    </div>
                </div>


                {total_messages.map((message) => (
                    <div key={message.id} className='sent-messages'>
                        <p id='sent-msg'>{message.msg}</p>
                        <p id='sent-time'>{message.sent_time}</p>
                        <button onClick={() => deletemsg(message)}><i class='bx bxs-trash'></i></button>
                    </div>
                ))}

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
