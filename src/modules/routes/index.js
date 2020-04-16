import Home from 'screens/Home';
import Search from 'screens/Search';
import Library from 'screens/Library';
import Login from 'screens/auth/login/Login';
import Signup from 'screens/auth/signup/Signup';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import NotFound from 'screens/NotFound';

export default [
  {
    exact: true,
    id: 'home',
    path: '/',
    component: Home,
  },
  {
    id: 'search',
    path: '/search',
    component: Search,
  },
  {
    id: 'library',
    path: '/library',
    component: Library,
    auth: PrivateRoute,
  },
  {
    id: 'signup',
    path: '/signup',
    component: Signup,
    auth: RestrictedRoute,
  },
  {
    id: 'login',
    path: '/login',
    component: Login,
    auth: RestrictedRoute,
  },
  {
    id: 'notFound',
    path: '*',
    component: NotFound,
  },
];
