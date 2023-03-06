import { useTodo } from 'context/todoContext';
import { useState } from 'react';
import TodoEditForm from './TodoEditForm';
import TodoItem from './TodoItem';
import { TodoProps } from './TodoItem.type';

const TodoList = () => {
  const { todos } = useTodo();
  const [editTodoItem, setEditTodoItem] = useState<TodoProps | null>(null);
  return (
    <>
      {todos.length <= 0 ? (
        <p>조회된 할 일이 없습니다</p>
      ) : (
        <ul>
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
        </ul>
      )}
    </>
  );
};

export default TodoList;
