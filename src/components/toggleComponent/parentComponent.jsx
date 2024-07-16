import React, { useState } from 'react';
import ChildComponent from './childComponent';

const ParentComponent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(prevState => !prevState);
  };
  const styles={
    div:{
            backgroundColor:'lightblue',
            border:'1px solid black',
            borderRadius: '5px',
            marginBottom:'10px',
            paddingLeft: '5px',
            width:'435px',
            textAlign:'center'
        },
    button:{
        padding:'10px',
        width:'100px',
        border:'1px solid black',
        textAlign:'center',
        margin:'10px',
        marginLeft:'40px',
        fontSize:'15px'
    }
  
  }

  return (
    <div style={styles.div}>
      <ChildComponent isOn={isOn} toggleState={toggleState} />
      <button style={styles.button} onClick={toggleState}>Toggle</button>
    </div>
  );
};

export default ParentComponent;
