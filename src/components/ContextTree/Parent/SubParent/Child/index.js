import React from 'react';
import InnerChild from './innerChild';

const Child = (props) => {
  return (
    <div style={{border: 'inherit', padding: '25px' }}>
        Child
        <InnerChild/>
    </div>
  )
}


export default Child;
