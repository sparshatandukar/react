// src/ListView.js
import React from 'react';

const ListView = ({ items, removeItem }) => {
  return (
    <ul className="list-none p-0">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-2 my-2 border-b border-gray-300"
        >
          {item}
          <button
            onClick={() => removeItem(index)}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
