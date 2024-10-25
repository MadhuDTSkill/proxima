import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './redux/Store';
import { Provider } from 'react-redux'
import AuthWrapper from './Wrappers/AuthWrapper'
import UnAuthWrapper from './Wrappers/UnAuthWrapper'
import Test from './Test';
import NewChat from './pages/chat/NewChat';
import CurrentChat from './pages/chat/CurrentChat';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import AppLayout from './layouts/AppLayout';
import NotFound from './pages/extra/NotFound';
import RootLayout from './layouts/RootLayout';
import CustomGPTs from './pages/chat/CustomGPTs';
import CustomMlModels from './pages/chat/CustomMlModels';
import SimpleLayout from './layouts/SimpleLayout';
import DarkModeToggle from './DarkModeToggle';

export default function App() {

  return (
    <Provider store={Store}>
      <div className='hidden'>
        <DarkModeToggle />
      </div>
      <RouterProvider router={router} />
    </Provider>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    Component: AuthWrapper(AppLayout),
    children: [
      {
        index: true,
        Component: NewChat
      },
      {
        path: '/c/:chat_id',
        Component: CurrentChat,
      },
    ]
  },
  {
    path: '/',
    Component: AuthWrapper(SimpleLayout),
    children: [
      {
        path: 'my-gpts',
        Component: CustomGPTs
      },
      {
        path: 'ml-dl-models',
        Component: CustomMlModels
      },
    ]
  },
  {
    path: '/',
    Component: UnAuthWrapper(RootLayout),
    children: [
      {
        path: '/signup',
        Component: SignUp
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/test',
        Component: Test
      },
    ]
  },
  {
    path: '*',
    Component: NotFound
  }
])