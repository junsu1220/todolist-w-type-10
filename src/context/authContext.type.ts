import { SignRequestProps } from 'apis/auth/sign.type';

export type AuthContextProps = {
  hasAuth: boolean;
  signUp: (props: SignRequestProps) => void;
  signIn: (props: SignRequestProps) => void;
  signOut: VoidFunction;
};
