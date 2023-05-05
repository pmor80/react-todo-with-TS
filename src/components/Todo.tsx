import Todo from '../models/todo';
import classes from './Todo.module.css';

const TodoItem: React.FC<{ todo: Todo; onRemoveTodo: () => void }> = props => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.todo.id}-{props.todo.text}
    </li>
  );
};

export default TodoItem;
