import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeaderBorder } from '../components/Header/Component';
import Header from '../components/Header/Header';
import { Reviewbox } from '../components/Review/Reviewcomponent';
import { ReviewListBox, ReviewTable } from '../components/ReviewList/ReviewListcomponent';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [reviewsPerPage] = useState(7);
  const [sortBy, setSortBy] = useState('id'); 
  const [sortOrder, setSortOrder] = useState('desc');

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

  const toggleSortOrder = () => setSortOrder((prevSortOrder) => (prevSortOrder === 'desc' ? 'asc' : 'desc'));

  const sortReviews = (property) => {
    if (property === sortBy) {
      toggleSortOrder();
    } else {
      setSortBy(property);
      setSortOrder('desc');
    }
  };

  const toggleSorting = () => {
    if (sortBy === 'rating') {
      toggleSortOrder();
    } else {
      setSortBy('rating');
      setSortOrder('desc');
    }
  };

  const sortedReviews = [...currentReviews].sort((a, b) => {
    const orderFactor = sortOrder === 'desc' ? -1 : 1;
    return orderFactor * (a[sortBy] - b[sortBy]);
  });

  return (
    <>
      <Header transparent />
      <HeaderBorder />
      <ReviewListBox>
        <Reviewbox backgroundColor="white">
          <button onClick={toggleSorting}>
            별점순 정렬 ({sortOrder === 'desc' ? 'Descending' : 'Ascending'})
          </button>
          <ReviewTable>
            <thead>
              <tr>
                <th>번호</th>
                <th>별점</th>
                <th>추천 대상</th>
                <th>작성 내용</th>
              </tr>
            </thead>
            <tbody>
              {sortedReviews.map((review) => (
                <tr key={review.id}>
                  <td>{review.id}</td>
                  <td>{review.rating}</td>
                  <td>{review.target}</td>
                  <td>{review.context}</td>
                </tr>
              ))}
            </tbody>
          </ReviewTable>
          <div>
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
