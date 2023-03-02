import {
  CreateTodoRequestProps,
  UpdateTodoRequestProps,
  DeleteTodoRequestProps,
} from './todo.type';
import { TodoProps } from 'components/todo/TodoItem.type';
import { AxiosResponse } from 'axios';
import { instance } from './axiosInstance';

export const fetchCreateTodo = ({
  todo,
}: CreateTodoRequestProps): Promise<AxiosResponse<TodoProps>> => {
  return instance.post<TodoProps>('/todos', { todo });
};

export const fetchGetTodos = (): Promise<AxiosResponse<TodoProps[]>> => {
  return instance.get<TodoProps[]>('todos');
};

export const fetchUpdateTodo = ({
  id,
  todo,
  isCompleted,
}: UpdateTodoRequestProps): Promise<AxiosResponse<TodoProps>> => {
  return instance.put<TodoProps>(`/todos/${id}`, { todo, isCompleted });
};

export const fetchDeleteTodo = ({
  id,
}: DeleteTodoRequestProps): Promise<AxiosResponse<TodoProps>> => {
  return instance.delete<TodoProps>(`/todos/${id}`);
};
