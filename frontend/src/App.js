import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './components/Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login></Login>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<Signup></Signup>
    },
    {
      path:'/home',
      element: <div>Home</div>
    }

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
