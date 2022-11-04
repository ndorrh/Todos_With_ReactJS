import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodosList } from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  toggle = (id) => {
    this.setState((preState) => {
      const updatedTodos = preState.todos.map((todo) => {
        if (todo.id === id) { return { ...todo, completed: !todo.completed }; }
        return todo;
      });
      // console.log(thruth);
      return { todos: updatedTodos };
    });
  }

  delTodo = (id) => {
    // console.log('deleted', id);
    this.setState((preState) => {
      const updatedTodos = preState.todos.filter((todo) => todo.id !== id);
      return { todos: updatedTodos };
    });
  };

  addTodo = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState({
      todos: [...todos, newTodo],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodo} />
          <TodosList todos={todos} handleChangeProps={this.toggle} deleteTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
