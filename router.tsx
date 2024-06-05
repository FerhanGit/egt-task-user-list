import { createBrowserRouter } from 'react-router-dom'
import Task from './pages/Task';
import Post from './pages/Post';
import User from './pages/User';

export const router = createBrowserRouter([
    { path: '/', element: <User />},
    { path: '/task', element: <Task />},
    { path: '/post', element: <Post />},
]);