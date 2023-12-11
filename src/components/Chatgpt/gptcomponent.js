import styled from "styled-components";

const GptTitle = styled.text`
color: #000;
text-align: center;
font-feature-settings: 'calt' off;
font-family: Pretendard;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
letter-spacing: -0.32px;
`;

const GptMainBox = styled.div`
  display: flex;
  height: 80vh;
`;

const GptContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 50px 100px;
  overflow: hidden;
  text-align: center;
`;

const GptContext = styled.text`
  color: #000;
  font-feature-settings: "calt" off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; 
  letter-spacing: -0.24px;
  margin: 20px;
`;

const GptBox = styled.div`
  width: 70%;
  height: 80%;
  flex=shrink: 0;
  background: linear-gradient(180deg, #afe6e4 0%, rgba(175, 230, 228, 0) 100%);
`;

const GptBtn1 = styled.button`
  width: 350px;
  margin: 10px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 6px;
  border: none;
  background: #8faad2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;
`;

const GptBtn2 = styled.button`
  width: 350px;
  margin: 10px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border: none;
  border-radius: 6px;
  background: #8ab8ca;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;
`;
const GptBtn3 = styled.button`
  width: 350px;
  margin: 10px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border: none;
  border-radius: 6px;
  background: #8fc8c9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;
`;

const GptBtn4 = styled.button`
  width: 350px;
  margin: 10px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border: none;
  border-radius: 6px;
  background: #a9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;
`;

export {
  GptMainBox,
  GptContainer,
  GptTitle,
  GptContext,
  GptBox,
  GptBtn1,
  GptBtn2,
  GptBtn3,
  GptBtn4,
};
