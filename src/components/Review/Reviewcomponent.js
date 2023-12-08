import styled from "styled-components";

const ReviewPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Reviewbox = styled.div`
  width: 1200px;
  height: 700px;
  flex-shrink: 0;
  border-radius: 50px;
  background: linear-gradient(180deg, #afe6e4 0%, rgba(175, 230, 228, 0) 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Reviewtext = styled.text`
  color: #000;
  font-feature-settings: "calt" off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: -0.18px;
`;

const StyledButton1 = styled.button`
  display: flex;
  width: 228px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: none;
  background: #8faad2;
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;
  &:hover {
    background: #6b8faa;
  }
`;

const StyledButton2 = styled.button`
  display: flex;
  width: 228px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: none;
  background: #8ab8ca;
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;

  &:hover {
    background: #6b8faa;
  }
`;

const StyledButton3 = styled.button`
  display: flex;
  width: 228px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: none;
  background: #8fc8c9;
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;

  &:hover {
    background: #6b8faa;
  }
`;

const StyledButton4 = styled.button`
  display: flex;
  width: 228px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: none;
  background: #a9d9d9;
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;

  &:hover {
    background: #6b8faa;
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  width: 228px;
  height: 82px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: none;
  background: #afe6e4;
  color: #fff;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;

  &:hover {
    background: #6b8faa;
  }
`;

export {
  ReviewPage,
  Reviewbox,
  Reviewtext,
  StyledButton1,
  StyledButton2,
  StyledButton3,
  StyledButton4,
  SubmitBtn,
};
