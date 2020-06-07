import React, { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import Container from 'components/Container';
import useAction from 'hooks/useAction';
import { firebaseGetUsers, resetUsers } from 'models/user/reducer';
import Card from 'pages/UsersPage/Card/Card';
import useSelector from 'hooks/useSelector';
import { usersSelector } from 'models/user/selectors';
import CommonLoader from 'components/CommonLoader';
import Loader from 'components/Loader';
import { ownerIdSelector } from 'models/auth/selectors';
import S from './UsersPage.styled';

const UsersPage = () => {
  const ownedId = useSelector(ownerIdSelector);
  const getUsers = useAction(firebaseGetUsers);
  const resetUsersData = useAction(resetUsers);
  const [isLoad, setIsLoad] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const { entities, ids, lastVisibleObject, size } = useSelector(usersSelector);
  useEffect(() => {
    setIsLoad(true);
    getUsers();
    return () => resetUsersData();
  }, []);

  const onScroll = useCallback(
    debounce(() => {
      if (ids.length < size) {
        const isEnd =
          window.scrollY + window.innerHeight + 150 >
          document.body.offsetHeight;
        if (isEnd && !isLoader) {
          // Если дошли до конца, показываем ещё юзеров
          setIsLoader(true);
          getUsers({ lastVisibleObject });
        }
      }
    }, 50),
    [lastVisibleObject, isLoader]
  );

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    if (ids.length !== 0) {
      setIsLoad(false);
      setIsLoader(false);
    }
  }, [ids]);

  return isLoad ? (
    <CommonLoader />
  ) : (
    <Container maxWidth="600">
      <S.Content>
        {ids.map((id: string) => {
          if (ownedId === id) return null;
          return (
            <Card
              key={id}
              id={id}
              avatarURL={entities[id].avatarURL}
              login={entities[id].login}
              followers={entities[id].followers}
              following={entities[id].following}
            />
          );
        })}
        {isLoader && (
          <S.LoaderZone>
            <Loader color="red" />
          </S.LoaderZone>
        )}
      </S.Content>
    </Container>
  );
};

export default UsersPage;
