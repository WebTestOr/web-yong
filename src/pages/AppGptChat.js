// Gpt 채팅 인터페이스 구현
// 출처 - 웹개발응용 13주차 강의 교안 활용
import React, { useState, useRef, useEffect } from 'react';
import { chat } from './openai';
import { ChatContainer, MessageContainer, InputContainer, Input, Button, MessageLine } from '../components/Chatgpt/gptchatcomponent';

const AppGptChat = ({ selectedBtnText }) => {
  //초기 텍스트 설정
  const [text, setText] = useState(selectedBtnText || '겨울에 놀러가기 좋은 한국 명소 추천해줘!');
  const [message, setMessage] = useState('');
  const refText = useRef();

  // selectedBtnText의 prop이 변경될 때마다 text 상태 업데이트
  useEffect(() => {
    setText(selectedBtnText || '겨울에 놀러가기 좋은 한국 명소 추천해줘!');
  }, [selectedBtnText]);
  //Gpt model과 상호작용
  const sendChat = () => {
    const prompt = text;
    setText('');
    refText.current.focus();
    setMessage((message) => message + 'ME:' + text + '\n');
    chat(prompt, (result) => {
      console.log('==>', result);
      setMessage((message) => message + 'AI:' + result + '\n');
    });
  };

  return (
    <ChatContainer>
      {message && (
        <MessageContainer>
          {message.split('\n').map((line, index) => (
            line.trim() !== '' && <MessageLine key={index}>{line}</MessageLine>
          ))}
        </MessageContainer>
      )}
      <InputContainer>
        <Input
          type="text"
          onChange={(evt) => setText(evt.target.value)}
          ref={refText}
          value={text}
        />
        <Button onClick={() => sendChat()}>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default AppGptChat;
