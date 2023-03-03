import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { storage } from 'utils';

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { 'Context-Type': 'application/json' },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = storage.get('access_token');

  if (!token) {
    return Promise.reject(
      new Error('인증되지 않은 접근입니다.\n다시 로그인 해주세요.')
    );
  }

  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${token}` },
  } as InternalAxiosRequestConfig;
});
