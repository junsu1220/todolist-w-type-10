import {
  CreateTodoRequestProps,
  deleteTodoRequestProps,
  UpdateTodoRequestProps,
} from 'apis/todo/todo.type';
import { TodoProps } from 'components/todo/TodoItem.type';

export type TodoContextProps = {
  todos: TodoProps[];
  createTodo: (props: CreateTodoRequestProps) => void;
  updateTodo: (props: UpdateTodoRequestProps) => void;
  deleteTodo: (props: deleteTodoRequestProps) => void;
};
