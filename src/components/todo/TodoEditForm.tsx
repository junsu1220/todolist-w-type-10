import { useTodo } from 'context/todoContext';
import { useEffect, useState } from 'react';
import { TodoProps } from './TodoItem.type';

const TodoEditForm = ({
  editTodoItem,
  setEditTodoItem,
}: {
  editTodoItem: TodoProps;
  setEditTodoItem: React.Dispatch<React.SetStateAction<TodoProps | null>>;
}) => {
  const [value, setValue] = useState('');
  const { updateTodo } = useTodo();

  const handleSubmitEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editTodoItem) throw new Error('no edit Item');
    updateTodo({ ...editTodoItem, todo: value });
    setEditTodoItem(null);
  };

  useEffect(() => {
    setValue(editTodoItem ? editTodoItem.todo : '');
  }, [setValue, editTodoItem]);

  return (
    <form onSubmit={handleSubmitEditTodo} className='flex justify-between'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='w-full'
        data-testid='modify-input'
      />
      <div className='flex'>
        <button type='submit' data-testid='submit-button' className='w-12'>
          제출
        </button>
        <button
          type='button'
          onClick={() => setEditTodoItem(null)}
          className='w-12'
          data-testid='cancel-button'
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default TodoEditForm;
