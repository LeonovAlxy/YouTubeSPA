import Header from './header/Header';
import SearchBody from './Search/SearchBody';
import AuthPage from './auth/AuthPage';
import { Routes, Route } from 'react-router';
import PrivateRoute from '../routes/PrivateRoute';
function Layout() {
  //добавление через модалку сделать (addfavsearch открывает модалку куда приходит название плюс данные доп (тот самый объект, который передается в локал))
  // в избранное добавить редактирование через модалку ту же ,удаление и выполнение поиска

  return (
    <>
      <Header />
      <SearchBody />
    </>
  );
}

export default Layout;
