import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from 'pages/AuthPage';
import routes from 'constants/routes';
import RegisterPage from 'pages/RegisterPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import useSelector from 'hooks/useSelector';
import { isAuthSelector } from 'models/user/selectors';
import routers from '../../routes';

const appRoutes = () => {
  const isAdminMode = false;
  const isAuthApp = useSelector(isAuthSelector);
  if (!isAuthApp) {
    return (
      <Switch>
        <Route exact path={routes.auth} render={() => <AuthPage />} />
        <Route exact path={routes.register} render={() => <RegisterPage />} />
        <Route exact path={routes.reset} render={() => <ResetPasswordPage />} />
        <Redirect to={routes.auth} />
      </Switch>
    );
  }
  return (
    <Switch>
      {routers.map(({ path, exact, component: Component, isAdmin, isAuth }) => {
        if (isAuth) {
          if (!isAdmin || isAdmin === isAdminMode) {
            return (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={props => <Component {...props} />}
              />
            );
          }
        }
        return null;
      })}
      <Redirect to={routes.home} />
    </Switch>
  );
};

export default memo(appRoutes);
