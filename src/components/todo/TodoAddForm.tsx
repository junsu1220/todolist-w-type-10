import { useTodo } from 'context/todoContext';
import { useState } from 'react';

const TodoAddForm = () => {
  const [value, setValue] = useState('');
  const { createTodo } = useTodo();

  const handleSubmitCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({ todo: value });
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmitCreateTodo} className='mt-4'>
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='여기에 할 일 입력'
            data-testid='new-todo-input'
            className='w-full'
          />
        </div>
        <button
          type='submit'
          data-testid='new-todo-add-button'
          className='mt-2 mb-4'
        >
          추가
        </button>
      </form>
    </>
  );
};

export default TodoAddForm;
