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

const MyList = () => {
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState('');

  const addList = () => {
    if (newList.trim() !== '') {
      setList([...list, newList]);
      setNewList('');
    }
  };

  const deleteList = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
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
        {list.map((item, index) => (
          <p key={index}>
            {index + 1}. {item}
            <button onClick={() => deleteList(index)}>삭제</button>
          </p>
        ))}
      </div>
    </MyListWrapper>
  );

};

export default MyList;
