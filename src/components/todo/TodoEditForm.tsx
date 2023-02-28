import { useTodo } from 'context/todoContext';
import React, { useState, useEffect } from 'react';
import { TodoProps } from './TodoItem.type';

export default function TodoEditForm({
  editTodoItem,
  setEditTodoItem,
}: {
  editTodoItem: TodoProps;
  setEditTodoItem: React.Dispatch<React.SetStateAction<TodoProps | null>>;
}) {
  const [value, setValue] = useState('');
  const { updateTodo } = useTodo();

  const handleSubmitEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editTodoItem) throw new Error('no edit item');
    updateTodo({ ...editTodoItem, todo: value });
    setEditTodoItem(null);
  };

  useEffect(() => {
    setValue(editTodoItem ? editTodoItem.todo : '');
  }, [editTodoItem, setValue]);

  return (
    <form onSubmit={handleSubmitEditTodo}>
      <div className='flex justify-between'>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          data-testId='modify-input'
          className='w-full'
        />
        <div className='flex'>
          <button type='submit' data-testId='submit-button' className='w-12'>
            제출
          </button>
          <button
            type='button'
            onClick={() => setEditTodoItem(null)}
            data-testId='cancel=button'
            className='w-12'
          >
            취소
          </button>
        </div>
      </div>
    </form>
  );
}
