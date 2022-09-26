import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Box } from 'components/Box/Box.styled';
// import Counter from 'components/Counter/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker/ColorPicker';
import { TodoList } from 'components/TodoList';
import initialTodos from '../json/todos.json';

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
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        <h1>Состояние Компонента</h1>
        {/* <Counter initialValue={5} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Total ToDo quantity: {totalTodoCount}</p>
          <p>Total completed: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
