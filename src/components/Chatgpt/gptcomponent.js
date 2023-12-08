import styled from "styled-components";

const GptContainer = styled.div`    
display: flex;
justify-content: space-between;
align-items: flex-start;
.GptLeftBox{
    margin-bottom: 8px;
}
`;

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

const GptBtn1 = styled.button`
display: flex;
width: 300px;
height: 82px;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border-radius: 6px;
border: none;
background: #8FAAD2;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: #FFF;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: -0.18px;
`

const GptBtn2 = styled.button`
display: flex;
width: 300px;
height: 82px;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border: none;
border-radius: 6px;
background: #8AB8CA;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: #FFF;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: -0.18px;
`
const GptBtn3 = styled.button`
display: flex;
width: 300px;
height: 82px;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border: none;
border-radius: 6px;
background: #8FC8C9;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: #FFF;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: -0.18px;
`

const GptBtn4 = styled.button`
display: flex;
width: 300px;
height: 82px;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border: none;
border-radius: 6px;
background: #A9D9D9;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: #FFF;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: -0.18px;
`

export {GptContainer, GptTitle, GptContext, GptBox, GptBtn1, GptBtn2, GptBtn3, GptBtn4};