import { useTodo } from 'context/todoContext';
import { TodoProps } from './TodoItem.type';
import { useState } from 'react';
import TodoEditForm from './TodoEditForm';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodo();
  const [editTodoItem, setEditTodoItem] = useState<TodoProps | null>(null);

  return (
    <>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            {editTodoItem?.id !== item.id ? (
              <TodoItem item={item} setEditTodoItem={setEditTodoItem} />
            ) : (
              <TodoEditForm
                editTodoItem={editTodoItem}
                setEditTodoItem={setEditTodoItem}
              />
            )}
          </li>
        );
      })}
    </>
  );
}
