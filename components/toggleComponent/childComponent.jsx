import React, { useEffect } from 'react';

const ChildComponent = ({ isOn, toggleState }) => {
  useEffect(() => {
    console.log(`The switch is now ${isOn ? 'ON' : 'OFF'}`);
  }, [isOn]);

  const styles={
    
    p:{
        fontSize:'17px',
        fontFamily:'Sans-serif',

    }
  }
  return (
    <div>
      <p style={styles.p}>The switch is {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default ChildComponent;
