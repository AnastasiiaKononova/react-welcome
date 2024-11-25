import React from 'react';
import InnerChild from './innerChild';

const Child = (props) => {
  console.log('Child re-render')
  return (
    <div style={{border: 'inherit', padding: '25px' }}>
        Child
        <InnerChild/>
    </div>
  )
}


export default Child;
