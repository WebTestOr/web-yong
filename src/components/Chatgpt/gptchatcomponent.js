import styled from "styled-components";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MessageContainer = styled.div`
  flex: 10;
  padding: 16px;
  overflow-y: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageLine = styled.div`
width: 959px;
height: 82px;
padding: 16px 24px;
align-items: center;
border-radius: 6px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-bottom:  8px;
color: #000;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
letter-spacing: -0.18px;
`;

const InputContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  padding: 16px;
  align-items: center; 
  justify-content: center;

`;

const Input = styled.input`
  display: flex;
  width: 959px;
  height: 160px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  
`;

const Button = styled.button`
display: flex;
width: 82px;
height: 82px;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 6px;
border: 2px solid var(--wf-base-800, #2D3648);
margin-left: 8px;
`;

export {ChatContainer, MessageContainer, MessageLine, InputContainer, Input, Button}