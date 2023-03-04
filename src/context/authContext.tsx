import { fetchSignIn, fetchSignUp } from 'apis/auth/sign';
import { SignRequestProps } from 'apis/auth/sign.type';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from 'utils';
import handleError from 'utils/error';
import { AuthContextProps } from './authContext.type';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [hasAuth, setHasAuth] = useState(false);
  const navigator = useNavigate();

  const signUp: AuthContextProps['signUp'] = async (
    props: SignRequestProps
  ) => {
    try {
      await fetchSignUp(props);
      navigator('signIn');
    } catch (error) {
      handleError(error);
    }
  };

  const signIn: AuthContextProps['signIn'] = async (
    props: SignRequestProps
  ) => {
    try {
      const res = await fetchSignIn(props);
      if (!res.data.access_token) throw new Error('no access token');
      storage.set('access_token', res.data.access_token);
      setHasAuth(true);
      navigator('/todo');
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
  if (!AuthContext) throw new Error('no AuthContext');
  return useContext(AuthContext);
};
