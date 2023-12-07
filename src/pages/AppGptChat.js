import React, { useState, useRef } from 'react';
import { chat } from './openai';

export default function AppGptChat() {
  const [text, setText] = useState('hello');
  const [message, setMessage] = useState('');
  const refText = useRef();

  const sendChat = () => {
    const prompt = text;
    setText('');
    refText.current.focus();
    setMessage((message) => message + 'Q:' + text + '\n');
    chat(prompt, (result) => {
      console.log('==>', result);
      setMessage((message) => message + 'A:' + result + '\n');
    });
  };

  return (
    <div style={{ flex: 1 }}>
      <div style={{ flex: 10 }}>
        <div>{message}</div>
      </div>

      <div style={{ flex: 3 }}>
        <div style={{ flexDirection: 'row' }}>
          <input
            type="text"
            style={{
              width: 300,
              fontSize: 15,
              borderColor: 'red',
              borderWidth: 2,
            }}
            onChange={(evt) => setText(evt.target.value)}
            ref={refText}
            value={text}
          />
          <button onClick={() => sendChat()}>Send</button>
        </div>
      </div>
    </div>
  );
}
