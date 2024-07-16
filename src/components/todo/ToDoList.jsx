import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ items, onComplete, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <ToDoItem key={item.id} item={item} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ToDoList;
