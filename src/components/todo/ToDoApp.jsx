import React, { useState } from 'react';
import ToDoList from './ToDoList';

const ToDoApp = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([
        ...items,
        { id: Date.now(), text: newItem, completed: false },
      ]);
      setNewItem('');
    }
  };

  const completeItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4 bg-slate-600 min-h-screen">
      <div className="max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 ">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new to-do"
            className="border p-2 flex-grow rounded-l"
          />
          <button
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
          >
            Add
          </button>
        </div>
        <ToDoList items={items} onComplete={completeItem} onDelete={deleteItem} />
      </div>
    </div>
  );
};

export default ToDoApp;
