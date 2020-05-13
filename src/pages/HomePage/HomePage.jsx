import React from 'react';
import Button from 'components/Button';
import useAction from 'hooks/useAction';
import { logOutUser } from 'models/user/reducer';

const HomePage = () => {
  const userExit = useAction(logOutUser);
  const logOut = () => {
    userExit();
  };

  return <Button onClickHandler={logOut}>log out</Button>;
};

export default HomePage;
