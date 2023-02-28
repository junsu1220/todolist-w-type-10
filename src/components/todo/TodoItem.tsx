import { useTodo } from 'context/todoContext';
import { TodoProps } from './TodoItem.type';

export default function TodoItem(props: {
  item: TodoProps;
  setEditTodoItem: React.Dispatch<React.SetStateAction<TodoProps | null>>;
}) {
  const { item, setEditTodoItem } = props;
  const { id, todo, isCompleted } = item;
  const { updateTodo, deleteTodo } = useTodo();

  return (
    <>
      <div className='flex justify-between'>
        <label className='flex'>
          <input
            type='checkbox'
            checked={isCompleted}
            onChange={() => {
              updateTodo({ ...item, isCompleted: !isCompleted });
            }}
            className='w-auto'
          />
          <p
            className={`w-48 truncate ${
              isCompleted ? 'line-through text-slate-300' : null
            }`}
          >
            {todo}
          </p>
        </label>
        <div className='flex'>
          <button
            onClick={() => {
              setEditTodoItem(item);
            }}
            data-testId='modify-button'
            className='w-12'
          >
            수정
          </button>
          <button
            onClick={() => {
              deleteTodo({ id: id });
            }}
            data-testId='delete-button'
            className='w-12'
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
}
