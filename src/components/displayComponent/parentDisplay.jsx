import React, { useState } from 'react';
import ChildMessage from './childDisplay';

const ParentMessage = () => {
  const [message, setMessage] = useState("Hello, World!");

  const updateMessage = () => {
    setMessage("Message has been updated!");
  };

  const styles = {
    div: {
      padding: '20px',
      backgroundColor: 'lavender',
      border: '1.5px solid black',
      borderRadius: '6px',
      width: '400px',
      textAlign: 'center',
      marginTop: '20px'
    },
    button: {
      margin: '5px',
      padding: '5px',
      color: 'black',
      backgroundColor: 'aliceblue',
      border: '1px solid',
      borderRadius: '3px'
    }
  };

  return (
    <div style={styles.div}>
      <ChildMessage message={message} />
      <button style={styles.button} onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default ParentMessage;
