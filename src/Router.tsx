import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import HookForm from './pages/HookForm.page';
import MantineForm from './pages/MantineForm.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/forms/mantine',
    element: <MantineForm />,
  },
  {
    path: '/forms/hook',
    element: <HookForm />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
