// Mylist
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MyListWrapper = styled.div`
  position: absolute;
  top: 176px;
  right: 0;
  width: 400px;
  height: 100vh;
  overflow-y: auto;
  background-color: #e8e5e5;
`;

const HeaderStyle = styled.div`
  width: 400px;
  height: 176px;
  text-align: center;
`;

const MyList = () => {
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState("");
  const [newExpense, setNewExpense] = useState("");
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  const addList = () => {
    if (newList.trim() !== "" && !isNaN(newExpense)) {
      const expense = parseFloat(newExpense);
      setList([...list, { title: newList, expense, checked: true }]);
      setNewList("");
      setNewExpense("");
    }
  };

  const deleteList = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const handleCheck = (index) => {
    const updatedList = [...list];
    updatedList[index].checked = !updatedList[index].checked;
    setList(updatedList);
  };

  const calculateTotal = () => {
    const total = list.reduce(
      (acc, item) => (item.checked ? acc + item.expense : acc),
      0
    );
    setTotalExpenses(total);
    setShowTotal(true);
  };

  return (
    <MyListWrapper>
      <HeaderStyle>
        <h1>My list</h1>
        <input
          type="text"
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
          placeholder="추가할 장소를 입력하세요."
        />
        <input
          type="text"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
          placeholder="예상 지출을 입력하세요."
        />
        <button onClick={addList}> + 즐겨찾기 추가</button>
      </HeaderStyle>
      <div>
        {list.map((item, index) => (
          <p key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(index)}
            />
            {item.title} - 지출: {item.expense}원
            <button onClick={() => deleteList(index)}>삭제</button>
          </p>
        ))}
        <button onClick={calculateTotal}>가격 합산</button>
        {showTotal && <p>Total Expenses: {totalExpenses}원</p>}
      </div>
    </MyListWrapper>
  );
};

export default MyList;
