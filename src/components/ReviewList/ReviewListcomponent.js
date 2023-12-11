import styled from "styled-components";

const ReviewListBox = styled.div`
display: flex;
width: 1920px;
height: 905px;
flex-shrink: 0;
background: linear-gradient(180deg, #AFE6E4 0%, rgba(175, 230, 228, 0.00) 100%);
flex-direction: column;
align-items: center;
justify-content: center; 
`;

const ReviewTable = styled.table`
width: 100%;
border-collapse: collapse;
margin-top: 20px;

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
`;


export {ReviewListBox, ReviewTable};