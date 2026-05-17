import Header from './header/Header';
import SearchBody from './Search/SearchBody';
import AuthPage from './auth/AuthPage';
import { Routes, Route } from 'react-router';
import PrivateRoute from '../routes/PrivateRoute';
function Layout() {
  //в сохранение добавить сортировку
  // в избранное добавить редактирование через ту же модалку,удаление и выполнение поиска
  // drag and drop опционально

  return (
    <>
      <Header />
      <SearchBody />
    </>
  );
}

export default Layout;
