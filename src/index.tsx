import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from 'context/authContext';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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
