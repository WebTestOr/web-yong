// 리뷰 작성 페이지
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReviewPage, Reviewbox, Reviewtext, StyledButton1, StyledButton2, StyledButton3, StyledButton4, SubmitBtn } from '../components/Review/Reviewcomponent';
import axios from 'axios';
import Header from '../components/Header/Header';
import { HeaderBorder } from '../components/Header/Component';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [target, setTarget] = useState('');
  const [context, setContext] = useState('');

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleButtonClick = (buttonContent) => {
    setTarget(buttonContent);
  };

  const handleTextInputChange = (e) => {
    setContext(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const apiUrl = 'https://jsonserverckt.run.goorm.site/images';

      const newData = {
        target,
        context,
        rating,
      };

      const response = await axios.post(apiUrl, newData);
      console.log(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
    <Header transparent/>
    <HeaderBorder/>
    <ReviewPage>
    <Reviewbox>
    <Reviewtext>별점</Reviewtext>
      <div className='ratingBox'>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleStarClick(star)}
            style={{ cursor: 'pointer' }}
          >
            {star <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      <Reviewtext>추천 대상</Reviewtext>
      <div className='targetBox'>
      <StyledButton1 onClick={() => handleButtonClick('20대')}>20대</StyledButton1>
      <StyledButton2 onClick={() => handleButtonClick('30대')}>30대</StyledButton2>
      <StyledButton3 onClick={() => handleButtonClick('40-50대')}>40-50대</StyledButton3>
      <StyledButton4 onClick={() => handleButtonClick('60대 이상')}>60대 이상</StyledButton4>
      </div>
      <div className='contextInput'>
      <Reviewtext>내용 작성</Reviewtext>
      <div className='reviewTextInput'>
        <input type='text' onChange={handleTextInputChange} />
      </div>
      </div>
      <div className='ReviewBtn'>
        <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        <Link to="/reviewlist">
            <SubmitBtn>리뷰 보기</SubmitBtn>
        </Link>
      </div>
    </Reviewbox>
    </ReviewPage>
    </>
  );
};

export default Review;
