import React, { useState } from 'react';
import styled from 'styled-components';

const MyListWrapper = styled.div`
  position: absolute;
  top: 176px;
  right: 0;
  width: 400px;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
`;

const HeaderStyle = styled.div`
  width: 400px;
  height: 176px;
  text-align: center;
`;

const MyList = ({ places, setPlaces, myList, setMyList }) => {
  const [newList, setNewList] = useState('');

  const addList = () => {
    if (newList.trim() !== '') {
      setMyList([...myList, { title: newList, type: 'list' }]);
      setNewList('');
    }
  };

  const deleteList = (index) => {
    const updatedList = myList.filter((_, i) => i !== index);
    setMyList(updatedList); // setMyList로 업데이트
  };

  return (
    <MyListWrapper>
      <HeaderStyle>
        <h1>즐겨찾기</h1>
        <input
          type="text"
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
          placeholder="추가할 장소를 입력하세요."
        />
        <button onClick={addList}> + 즐겨찾기 추가</button>
      </HeaderStyle>
      <div>
        {myList && myList.map((item, index) => (
          <p key={index}>
            {index + 1}. {item.type === 'place' ? item.title : item.title}
            <button onClick={() => deleteList(index)}>삭제</button>
          </p>
        ))}
      </div>
    </MyListWrapper>
  );
};

export default MyList;
