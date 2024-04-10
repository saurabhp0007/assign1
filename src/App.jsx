import './App.css'
import Login from './Components/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './Page/LoginPage'
import Register from './Page/Register'
import Profile from './Page/Profile'

function App() {
 
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/profile",
    element: <Profile  />
  }
 ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
