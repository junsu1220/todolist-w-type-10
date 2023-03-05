import { fetchSignIn, fetchSignUp } from 'apis/auth/sign';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, storage } from 'utils';
import { AuthContextProps } from './authContext.type';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [hasAuth, setHasAuth] = useState(false);
  const navigator = useNavigate();

  const signIn: AuthContextProps['signIn'] = async (props) => {
    try {
      const response = await fetchSignIn(props);
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

  const signOut = () => {
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

export const useAuth = () => {
  if (!AuthContext) throw new Error('no AuthContext');
  return useContext(AuthContext);
};
