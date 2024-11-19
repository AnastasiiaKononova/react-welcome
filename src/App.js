import React from "react";
import TodoPage from './pages/TodoPage';
import UserList from './components/UserList';
import UserCard from "./components/UserCard";
import Lamp from "./components/Scene/Lamp";
import ListPage from "./pages/ListPage";
import GridPage from "./pages/GridPage";

// import './reset.css';

class App extends React.Component {
  // Parent component (батьківська компонента)
  constructor(props) {
    super(props);
    this.state = {
      render: true,
    };
  }
  changeRender = () => {
    this.setState({
      render: !this.state.render,
    });
  };
  render() {
    const user = {
      email: "e",
      name: {
        first: "a",
        last: "b",
      },
    };
    return (
      <section>
        <GridPage/>
      </section>
    );
  }
}

export default App;

/*

Компоненти в React - це функція, яка отримує певні вхідні дані і повертає react-елементи

Компоненти бувають двох типів:

- Функціональні - це звичайна JS-функція, яка повертає створений react-елемент

- Класові - це клас, який наслідується від React.Component і описувати шаблон компоненти, яка має бути в інтерфейсі
*/

/*
Рендер - процес відмальовування (отрисовки) елементів на сторінці браузера.
(re-render - перемальовування, оновлення)
Браузер оновлює елементи на екрані (ререндерить сторінку) в той момент, коли стек пустий
*/
