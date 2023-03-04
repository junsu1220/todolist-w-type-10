import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

const handleError = (error: unknown) => {
  console.error(error);
  if (error instanceof AxiosError && error.response?.data.message) {
    toast.error(error.response?.data.message);
  } else if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error('unknown error');
  }
};

export default handleError;
