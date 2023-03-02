import { SignRequestProps } from 'apis/auth/sign.type';

export type AuthContextProps = {
  hasAuth: boolean;
  signIn: (props: SignRequestProps) => void;
  signUp: (props: SignRequestProps) => void;
  signOut: VoidFunction;
};
