import { useAuth } from 'context/authContext';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col items-center mt-12'>
      <div className='w-80'>
        <Header />
        {children}
      </div>
    </div>
  );
};

const Header = () => {
  const { hasAuth, signOut } = useAuth();
  return (
    <div className='flex justify-between items-center h-32'>
      <h1 className='text-2xl'>Todo App</h1>
      {!hasAuth ? (
        <>
          <Link to={'/signIn'}>로그인</Link>
          <Link to={'/signUp'}>회원가입</Link>
        </>
      ) : (
        <button onClick={() => signOut()} className='w-20'>
          로그아웃
        </button>
      )}
    </div>
  );
};

export default Layout;
