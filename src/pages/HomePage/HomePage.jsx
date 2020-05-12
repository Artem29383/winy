import React from 'react';
import Button from 'components/Button';
import { authRef } from '../../firebase/firebase';

const HomePage = () => {
  const logOut = async () => {
    await authRef.signOut();
  };

  return <Button onClickHandler={logOut}>log out</Button>;
};

export default HomePage;
