import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeaderBorder } from '../components/Header/Component';
import Header from '../components/Header/Header';
import { Reviewbox } from '../components/Review/Reviewcomponent';
import { ReviewListBox } from '../components/ReviewList/ReviewListcomponent';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);

  const fetchReviews = async () => {
    try {
      const apiUrl = 'https://jsonserverckt.run.goorm.site/images'; 
      const response = await axios.get(apiUrl);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []); 

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header transparent />
      <HeaderBorder />
      <ReviewListBox>
        <Reviewbox backgroundColor="white">
          <table className="table">
            <thead>
              <tr>
                <th>num</th>
                <th>Rating</th>
                <th>Target</th>
                <th>Context</th>
              </tr>
            </thead>
            <tbody>
              {currentReviews.map((review) => (
                <tr key={review.id}>
                  <td>{review.id}</td>
                  <td>{review.rating}</td>
                  <td>{review.target}</td>
                  <td>{review.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
        </Reviewbox>
      </ReviewListBox>
  
    </>
  );
};

export default ReviewList;
