import styled from "styled-components";

const GptTitle = styled.text`
color: #000;
text-align: center;
font-feature-settings: 'calt' off;
font-family: Pretendard;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 75% */
letter-spacing: -0.32px;
`;

const GptContext = styled.text`
color: #000;
text-align: center;
font-feature-settings: 'calt' off;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 100% */
letter-spacing: -0.24px;
`;

const GptBox = styled.div`
width: 1369px;
height: 905px;
flex-shrink: 0;
background: linear-gradient(180deg, #AFE6E4 0%, rgba(175, 230, 228, 0.00) 100%);
`;


export {GptTitle, GptContext, GptBox};