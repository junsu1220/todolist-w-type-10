import { useTodo } from 'context/todoContext';
import { TodoProps } from './TodoItem.type';

const TodoItem = ({
  item,
  setEditTodoItem,
}: {
  item: TodoProps;
  setEditTodoItem: React.Dispatch<React.SetStateAction<TodoProps | null>>;
}) => {
  const { updateTodo, deleteTodo } = useTodo();
  const { id, todo, isCompleted } = item;

  return (
    <>
      <div className='flex justify-between'>
        <label className='flex'>
          <input
            type='checkbox'
            checked={isCompleted}
            onChange={() => updateTodo({ ...item, isCompleted: !isCompleted })}
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
            data-testid='modify-button'
            onClick={() => setEditTodoItem(item)}
            className='w-12'
          >
            수정
          </button>
          <button
            onClick={() => deleteTodo({ id: id })}
            data-testid='delete-button'
            className='w-12'
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
