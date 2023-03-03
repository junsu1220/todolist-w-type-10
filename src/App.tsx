import { useAuth } from 'context/authContext';
import SignInPage from 'pages/signIn';
import SignUpPage from 'pages/signUp';
import TodoPage from 'pages/todo';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const { hasAuth } = useAuth();
  return (
    <Routes>
      <Route>
        <Route
          path='/'
          element={
            hasAuth ? (
              <Navigate to={'/todo'} replace />
            ) : (
              <Navigate to={'/signIn'} replace />
            )
          }
        />
        <Route
          path='/signIn'
          element={hasAuth ? <Navigate to='/todo' replace /> : <SignInPage />}
        />
        <Route
          path='/signUp'
          element={hasAuth ? <Navigate to='/todo' replace /> : <SignUpPage />}
        />
        <Route
          path='/todo'
          element={hasAuth ? <TodoPage /> : <Navigate to='/signIn' replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;
