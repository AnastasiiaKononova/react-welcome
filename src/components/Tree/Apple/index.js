import React from 'react';

const Apple = props => {
  console.log('apple render');

  return <div>Apple is {props.color}</div>;
};

export default Apple;
/*
нові пропси - нові вхідні дані призводять до пере-виконання функціональної компоненти
Якщо вхідні дані відрізняються, то реакт перемалює елементи на екрані. 
Якщо ні, то елементи на екрані залишаться, як є (але функціональна компонента все одно пере-рендериться)
*/
