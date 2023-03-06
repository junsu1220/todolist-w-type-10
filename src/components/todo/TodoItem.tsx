import { useTodo } from 'context/todoContext';
import { TodoProps } from './TodoItem.type';

const TodoItem = ({
  item,
  setEditTodoItem,
}: {
  item: TodoProps;
  setEditTodoItem: React.Dispatch<React.SetStateAction<TodoProps | null>>;
}) => {
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
            onClick={(e) => e.preventDefault()}
          >
            {todo}
          </p>
        </label>
        <div className='flex'>
          <button
            onClick={() => setEditTodoItem(item)}
            className='w-12'
            data-testid='modify-button'
          >
            수정
          </button>
          <button
            onClick={() => deleteTodo({ id: id })}
            className='w-12'
            data-testid='delete-button'
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
