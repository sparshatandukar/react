import React, { useState } from 'react';
import ChildCounter from './childcounter';

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const styles = {
    div: {
      padding: '20px',
      backgroundColor: 'aliceblue',
      border: '1.5px solid black',
      borderRadius: '6px',
      width: '400px',
      textAlign: 'center'
    },
    button: {
      margin: '10px',
      padding: '5px',
      color: 'black',
      backgroundColor: 'aliceblue',
      border: '1px solid',
      borderRadius: '3px'
    }
  };

  return (
    <div style={styles.div}>
      <ChildCounter count={count} />
      <button style={styles.button} onClick={increment}>Increment</button>
      <button style={styles.button} onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ParentCounter;
