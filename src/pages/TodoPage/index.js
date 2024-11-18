import React from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import styles from './TodoPage.module.css'
import TodoItem from "../../components/TodoItem";


class TodoPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
		this.counter = 0;
	}
	getNewItem = ({todo, done}) => {
		const newItem = {
			body: todo,
			done,
			id: this.counter++
		}
		const newList = [...this.state.list, newItem];
		this.setState({
			list: newList
		})
	}
	checkItemHandler = (value, id) => {
		console.log(value, id);
		const newList = this.state.list.map(item => {
			if(item.id === id) {
				item.done = value
			}
			return item
		});
		this.setState({
			list: newList
		})
	}
	deleteItem = (id) => {
		console.log(id)
		const filtered = this.state.list.filter(el => el.id !== id);
		this.setState({
			list: filtered
		})
	}
	
	render() {
		const itemsArray = this.state.list.map(todo => <TodoItem   
			todo={todo} 
			key={todo.id} 
			checkboxHandler={this.checkItemHandler}
			deleteHandler={this.deleteItem}/>)
		return (
			<div className={styles.container}>
				<TodoForm getCallback={this.getNewItem} className={styles['red-text']}/>
				<TodoList
					heading="Undone tasks">
					{itemsArray}
					</TodoList>
			</div>
		);
	}
}
export default TodoPage;
