import { useTodo } from 'context/todoContext';
import { useState } from 'react';

const TodoAddForm = () => {
  const [value, setValue] = useState('');
  const { createTodo } = useTodo();

  const handleSubmitCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length <= 0) return;
    createTodo({ todo: value });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitCreateTodo} className='mt-4'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='여기에 할 일 입력'
        data-testid='new-todo-input'
        className='w-full'
      />
      <button
        type='submit'
        data-testid='new-todo-add-button'
        className='mt-2 mb-4'
      >
        추가
      </button>
    </form>
  );
};

export default TodoAddForm;
