import React, { useState } from 'react';

function ListMove() {
  const [list1, setList1] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [list2, setList2] = useState([]);

  const moveItem = () => {
    if (list1.length > 0) {
      const itemToMove = list1[0];
      setList1(list1.slice(1));
      setList2([...list2, itemToMove]);
    }
  };

  return (
    <div>
      <h1>List 1</h1>
      <ul>
        {list1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={moveItem}>Move item</button>
      <h1>List 2</h1>
      <ul>
        {list2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListMove;
