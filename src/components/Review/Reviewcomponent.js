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
border-radius: 50px;
background: ${(props) => props.backgroundColor || 'linear-gradient(180deg, #AFE6E4 0%, rgba(175, 230, 228, 0.00) 100%)'};box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-top: 78px;
display: flex;
flex-direction: column;
align-items: center;


.ratingBox > span{
    font-size: 24px;
}

  .targetBox{
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  }

.contextInput{
margin-top: 55px;
}

.reviewTextInput input{
display: flex;
margin-top: 10px;
width: 959px;
height: 160px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;
}

.ReviewBtn{
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  gap: 30px;
}

`;

const Reviewtext = styled.text`
color: #000;
font-feature-settings: 'calt' off;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 150%; 
letter-spacing: -0.18px;
margin-top: 35px;
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
background: #8FAAD2;
color: #FFF;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
letter-spacing: -0.18px;
margin: 0 10px; 
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
background: #8AB8CA;
color: #FFF;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
letter-spacing: -0.18px;
margin: 0 10px; 
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
background: #8FC8C9;
color: #FFF;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
letter-spacing: -0.18px;
margin: 0 10px; 
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
background: #A9D9D9;
color: #FFF;
font-feature-settings: 'calt' off;
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
margin-top: 35px;
width: 150px;
height: 55px;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 6px;
border: none;
background: #AFE6E4;
color: #000000;
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
letter-spacing: -0.18px;
text-decoration: none; 
&:hover {
  background: #6b8faa;
}
`;



export {ReviewPage, Reviewbox, Reviewtext, StyledButton1, StyledButton2, StyledButton3, StyledButton4, SubmitBtn};
