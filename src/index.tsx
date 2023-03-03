import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from 'context/authContext';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Toaster />
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </>
);
