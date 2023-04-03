import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import ErrorPage from '../shared/ErrorPage';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
