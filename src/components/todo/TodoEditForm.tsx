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
  const { updateTodo } = useTodo();
  const [value, setValue] = useState('');

  const handleSubmitEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editTodoItem) throw new Error('no edit item');
    updateTodo({ ...editTodoItem, todo: value });
    setEditTodoItem(null);
  };

  useEffect(() => {
    setValue(editTodoItem ? editTodoItem.todo : '');
  }, [setValue, editTodoItem]);

  return (
    <form onSubmit={handleSubmitEditTodo}>
      <div className='flex justify-between'>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          data-testid='modify-input'
          className='w-full'
        />
        <div className='flex'>
          <button type='submit' className='w-12' data-testid='submit-button'>
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
      </div>
    </form>
  );
};

export default TodoEditForm;
