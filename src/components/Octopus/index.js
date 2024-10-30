import React, { Component } from 'react';

class Octopus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mood: 'sad'
    }
  }
  
  clickHandler = () => {
    this.setState({
        mood: this.state.mood === 'sad' ? 'happy' : 'sad' 
    })
}
  
render() {
    // може виконуватись ще якась робота
    const url =  this.state.mood === 'sad' ? '/images/sadoct.jpeg' : '/images/happyoct.jpeg';
    return (
        <section onClick={this.clickHandler}>
            <img src={url} />
        </section>
       
    );
}
}
export default Octopus;
// props - статичні дані, які приходять в компоненту ззовні (від батьківської компоненти)
// state - стан - динамічні дані які існують тільки всередині самої компоненти 