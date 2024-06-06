import { createBrowserRouter } from 'react-router-dom'
import Tasks from './pages/Tasks';
import Posts from './pages/Posts';
import Users from './pages/Users';

export const router = createBrowserRouter([
    { path: '/', element: <Users />},
    { path: '/task', element: <Tasks />},
    { path: '/post', element: <Posts />},
]);