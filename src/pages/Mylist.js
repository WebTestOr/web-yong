import React, { useState } from 'react';
import styled from 'styled-components';

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

  const HeaderStyle = styled.div`

    width: 400px;
    height: 176px;
    text-align: center;
  `;

  return (
    <div>
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
      <ul>
        {list.map((item, index) => (
          <p key={index}>
            {index + 1}. {item}
            <button onClick={() => deleteList(index)}>삭제</button>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
