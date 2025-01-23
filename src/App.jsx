import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    children: [
      { 
        path: '/', 
        element: <HomePage />
      },
      { 
        path: 'products', 
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <ProductPage />
      }
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
