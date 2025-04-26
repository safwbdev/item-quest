// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useDataContext } from './context/DataContext'
import Categories from './components/categories/Categories'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import List from './components/categories/list/List';


function App() {

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Categories />
        },
        {
          path: "/list/:id",
          element: <List />,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
