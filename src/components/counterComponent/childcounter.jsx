import React, { useEffect } from 'react';

const ChildCounter = ({ count }) => {
  useEffect(() => {
    console.log(`The count is now ${count}`);
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
    </div>
  );
};

export default ChildCounter;
