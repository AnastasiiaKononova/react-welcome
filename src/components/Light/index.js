import React from 'react';

class Light extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      light: true,
    };
  }

  changeLamp = event => {
    this.setState({
      light: !this.state.light,
    });
    // функція, яка приймає новий об'єкт стану і замінює ним попередній
    // після цього реакт призводить до пере-виклику метода render() і оновлення даних на екрані
  };

  clickHandler = () => {
    this.changeLamp(); // this is undefined??
  };

  render () {
    return (
      <h1 onClick={this.changeLamp}>Lamp {this.state.light ? 'on' : 'off'}</h1>
    );
  }
}
/// Таска: зробити так, щоби вмикання-вимикання лампочки було багаторазовим

/*
}

/*
Класова компонента - шаблон для створення компоненти
Обов'язково наслідуємось від React.Component
Обов'язково реалізуємо метод render(), який має повертати створення реакт-елемента
this.props - вхідні дані для компоненти
*/

export default Light;

/*
Props - статичні вхідні дані. Компонента їх міняти не може (read only)
(this.props)

State - стан (состояние) - динамічні дані, які існують інкапсульовано тільки всередині самої компоненти
(this.state)

В класової компоненти стан - це js-об'єкт.

Він визначається при створенні екземпляра компоненти в конструкторі

this.state - об'єкт іммутабельний
Кожен раз, коли стан змінюється, реакт заново викликає метод render()
*/
