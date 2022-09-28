import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Box } from 'components/Box/Box.styled';
// import Counter from 'components/Counter/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker/ColorPicker';
import { ToDoEditor } from '../components/ToDoEditor';
import { Form } from '../components/Form';
import { TodoList } from 'components/TodoList';
import { Filter } from '../components/Filter';
import initialTodos from '../json/todos.json';
import { nanoid } from 'nanoid';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = { id: nanoid(), text, completed: false };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    //     this.setState(prevState => ({
    //       todos: prevState.todos.map(todo => {
    //         if (todo.id === todoId) {
    //           return {
    //             ...todo,
    //             completed: !todo.completed,
    //           };
    //         }
    //         return todo;
    //       }),
    //     }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredItems = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = this.getCompletedTodoCount();
    const filteredTodos = this.getFilteredItems();

    return (
      <>
        {/* <h1>Состояние Компонента</h1> */}
        {/* <Counter initialValue={5} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Total ToDo quantity: {totalTodoCount}</p>
          <p>Total completed: {completedTodosCount}</p>
        </div>

        <ToDoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
      </>
    );
  }
}

export default App;
