import React, { Component } from 'react';
import Apple from './Apple';

class Tree extends Component {
  constructor (props) {
    super(props);
    this.state = {
      color: 'green',
    };
  }

  componentDidMount () {
    console.log('компонента була примонтована');
  }

  shouldComponentUpdate () {
    console.log('чи потрібно мені оновлюватись?');
    // має повертати true або false
    //  true - якщо за певної умови компонента МАЄ оновитись
    // false - якщо компонента не має оновлюватись

    // ПЕРЕДЧАСНА ОПТИМІЗАЦІЯ - ЦЕ ЗЛО
    return true;
  }

  componentDidUpdate () {
    console.log('компонента оновилась');
  }

  componentWillUnmount () {
    console.log('компонента зараз помре');
    // зробити якусь останню роботу перед тим, як компонента помре
    // підходить, щоби прибрати за собою перед закриттям компоненти (почистити таймаути, прибрати зайві вручну навішані eventListeners)
    // як тільки метод завершить виконуватись, компонента всьо
  }
  changeColor = () => {
    this.setState({
      color: 'red',
    });
  };

  render () {
    // завжди має бути синхронним методом!
    return (
      <div onClick={this.changeColor}>
        Tree
        <Apple color={this.state.color} />
      </div>
    );
  }
}
export default Tree;
/*
Стадії життя компоненти:
1. Народження (Монтування)
    1.1 - Конструктор() - створюється новий екземпляр компоненти
    1.2 - Метод рендер() (перше відображення компоненти на екрані)
    1.3 - componentDidMount() - компонента була примонтована (народилась, відображена на екрані і готова до подальших дій)
2. Життя (оновлення)
    ... нові вхідні дані або зміна стану потребують оновлення компоненти!
    2.1 shouldComponentUpdate() - метод, який викликається реактом, коли компоненті приходять нові пропси або міняється стан (setState викликається). Цей метод може керувати оновленнями компоненти:
            - якщо повертається true, то компонента оновлюється
            - якщо повертається false, то компонента не оновлюється
        - якщо компонента МАЄ оновитись, то далі викликається заново метод
    2.2 Render() - заново рендериться все з новими даними
    2.3 componentDidUpdate() - після 2ого і всіх наступних рендерів - метод, в якому ми можемо робити якусь додаткову роботу після кожного оновлення
3. Смерть (відмонтування)
    - відбувається, коли ми командуємо реакту більше не мати в дереві компонент нашу поточну компоненту
    3.1 componentWillUnmount() - останній метод, який відпрацьовує, поки компонента ще є на екрані. Підходить для очистки вручну навішаних обробників події, інтервалів-таймаутів.
    Запити на сервер звідси робити не варто, бо компонента не може бути від'єднана (відмонтована) поки цей метод не відпрацює
*/
