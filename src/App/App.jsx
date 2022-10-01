import React, { Component } from 'react';
import styled from 'styled-components';
// import { Box } from 'components/Box/Box.styled';
// import Counter from 'components/Counter/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker/ColorPicker';
import { ToDoEditor } from '../components/ToDoEditor';
// import { Form } from '../components/Form';
import { TodoList } from 'components/TodoList';
import { Modal } from '../components/Modal';
import { Filter } from 'components/TodoFilter';
import initialTodos from '../json/todos.json';
import { nanoid } from 'nanoid';
import { IconButton } from 'components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

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
    //     todos: initialTodos,
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
    }
    localStorage.setItem('todos', JSON.stringify(nextTodos));

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = { id: nanoid(), text, completed: false };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));

    //     this.toggleModal();
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = this.getCompletedTodoCount();
    const filteredTodos = this.getFilteredItems();

    return (
      <>
        <IconButton onClick={this.toggleModal} aria-label="Add Todo">
          <AddIcon width="40px" height="40px" fill="#fff" />
        </IconButton>
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <h1>Hello, this is modal content as chilcdren</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium natus neque quas beatae consequuntur fuga in
              inventore, illo magni pariatur. Eaque officia facere, temporibus
              similique voluptates magni vel soluta assumenda!
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button> */}
            <ToDoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        {/* <h1>Состояние Компонента</h1> */}
        {/* <Counter initialValue={5} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Total ToDo quantity: {totalTodoCount}</p>
          <p>Total completed: {completedTodosCount}</p>
        </div>
        {/* <ToDoEditor onSubmit={this.addTodo} /> */}
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
