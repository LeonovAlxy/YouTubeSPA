import Header from './header/Header';
import SearchBody from './Search/SearchBody';
import AuthPage from './auth/AuthPage';
import { Routes, Route } from 'react-router';
import PrivateRoute from '../routes/PrivateRoute';
function Layout() {
  return (
    <>
      <Header />
      <SearchBody />
    </>
  );
}

export default Layout;
