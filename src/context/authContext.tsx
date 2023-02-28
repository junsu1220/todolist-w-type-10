import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { fetchSignIn, fetchSignup } from 'apis/auth/sign';
import { handleError } from 'utils';
import { storage } from 'utils';
import { AuthContextProps } from './authContext.type';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [hasAuth, setHasAuth] = useState(false);
  const navigator = useNavigate();

  const signUp: AuthContextProps['signUp'] = async (props) => {
    try {
      await fetchSignup(props);
      navigator('signin');
    } catch (err) {
      handleError(err);
    }
  };

  const signIn: AuthContextProps['signIn'] = async (props) => {
    try {
      const res = await fetchSignIn(props);
      if (!res.data.access_token) new Error('no access token');
      storage.set('access_token', res.data.access_token);
      setHasAuth(true);
      navigator('/todo');
    } catch (err) {
      handleError(err);
    }
  };

  const signOut: AuthContextProps['signOut'] = () => {
    storage.remove('access_token');
    setHasAuth(false);
    navigator('/signin');
  };

  useEffect(() => {
    setHasAuth(storage.get('access_token') ? true : false);
  }, []);

  return (
    <AuthContext.Provider value={{ hasAuth, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  if (!AuthContext) throw new Error('no AuthContext');
  return useContext(AuthContext);
}
