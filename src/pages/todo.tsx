import Layout from 'components/common/Layout';
import TodoAddForm from 'components/todo/TodoAddForm';
import TodoList from 'components/todo/TodoList';
import { TodoProvider } from 'context/todoContext';

const TodoPage = () => {
  return (
    <Layout>
      <TodoProvider>
        <TodoAddForm />
        <TodoList />
      </TodoProvider>
    </Layout>
  );
};

export default TodoPage;
