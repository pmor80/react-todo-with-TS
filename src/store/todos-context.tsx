import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (todoId: string) => {}
});

const TodosContextProvider: React.FC = props => {
  const initialTodos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos(prevTodos => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
