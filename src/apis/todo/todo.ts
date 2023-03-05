import { TodoProps } from 'components/todo/TodoItem.type';
import { instance } from './axiosInstance';
import {
  CreateTodoRequestProps,
  UpdateTodoRequestProps,
  DeleteTodoRequestProps,
} from './todo.type';

export const fetchGetTodos = () => {
  return instance.get<TodoProps[]>('/todos');
};

export const fetchCreateTodo = ({ todo }: CreateTodoRequestProps) => {
  return instance.post<TodoProps>('/todos', { todo });
};

export const fetchUpdateTodo = ({
  id,
  todo,
  isCompleted,
}: UpdateTodoRequestProps) => {
  return instance.put<TodoProps>(`/todos/${id}`, { todo, isCompleted });
};

export const fetchDeleteTodo = ({ id }: DeleteTodoRequestProps) => {
  return instance.delete<TodoProps>(`/todos/${id}`);
};
