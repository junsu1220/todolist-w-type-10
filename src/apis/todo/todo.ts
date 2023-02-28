import { TodoProps } from 'components/todo/TodoItem.type';
import {
  CreateTodoRequestProps,
  UpdateTodoRequestProps,
  DeleteTodoRequestProps,
} from './todo.type';
import { instance } from './axiosInstance';

export function fetchCreateTodo({ todo }: CreateTodoRequestProps) {
  return instance.post<TodoProps>('/todos', todo);
}

export function fetchGetTodos() {
  return instance.get<TodoProps[]>('/todos');
}

export function fetchUpdateTodo({
  id,
  todo,
  isCompleted,
}: UpdateTodoRequestProps) {
  return instance.put<TodoProps>(`/todos/${id}`, {
    todo,
    isCompleted,
  });
}

export function fetchDeleteTodo({ id }: DeleteTodoRequestProps) {
  return instance.delete<TodoProps>(`/todos/${id}`);
}
