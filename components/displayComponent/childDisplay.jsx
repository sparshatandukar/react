import React, { useEffect } from 'react';

const ChildMessage = ({ message }) => {
  useEffect(() => {
    console.log(`The message is now: ${message}`);
  }, [message]);

  return (
    <div>
      <p>Current Message: {message}</p>
    </div>
  );
};

export default ChildMessage;
