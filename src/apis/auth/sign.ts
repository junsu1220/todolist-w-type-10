import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { handleError } from 'utils';
import { SignRequestProps, SignResponseProps } from './sign.type';

export const fetchSignIn = (
  props: SignRequestProps
): Promise<AxiosResponse<SignResponseProps>> => {
  return getInstance().post<SignResponseProps>('/signIn', props);
};

export const fetchSignUp = (
  props: SignRequestProps
): Promise<AxiosResponse<SignResponseProps>> => {
  return getInstance().post<SignResponseProps>('/signUp', props);
};

const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/auth`,
});

const getInstance = (): AxiosInstance => {
  if (!process.env.REACT_APP_BACKEND_URL)
    handleError(new Error('no environment variable : REACT_APP_BACKEND_URL'));
  return instance;
};
