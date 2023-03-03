import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSignIn, fetchSignUp } from '../apis/auth/sign';
import { handleError } from '../utils/error';
import { storage } from '../utils/storage';
import { AuthContextProps } from './authContext.type';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigator = useNavigate();
  const [hasAuth, setHasAuth] = useState(false);

  const signIn: AuthContextProps['signIn'] = async (props) => {
    try {
      const response = await fetchSignIn(props);
      if (!response.data.access_token) throw new Error('no access token');
      storage.set('access_token', response.data.access_token);
      setHasAuth(true);
      navigator('/todo');
    } catch (error) {
      handleError(error);
    }
  };

  const signUp: AuthContextProps['signUp'] = async (props) => {
    try {
      await fetchSignUp(props);
      navigator('/signIn');
    } catch (error) {
      handleError(error);
    }
  };

  const signOut: AuthContextProps['signOut'] = () => {
    storage.remove('access_token');
    setHasAuth(false);
    navigator('/signIn');
  };

  useEffect(() => {
    setHasAuth(storage.get('access_token') ? true : false);
  }, []);

  return (
    <AuthContext.Provider value={{ hasAuth, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  if (!AuthContext) throw new Error('no authContext');
  return useContext(AuthContext);
};
