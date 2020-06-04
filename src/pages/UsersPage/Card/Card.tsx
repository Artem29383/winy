import React, { memo } from 'react';
import image from 'assets/images/defaultUserPhoto.png';
import Button from 'components/Button/Button';
import S from './Card.styled';
import routes from 'constants/routes';

type TypeCard = {
  avatarURL: string;
  id: string;
  followers: number;
  following: number;
  login: string;
};

const Card: React.FC<TypeCard> = ({
  id,
  avatarURL,
  login,
  followers,
  following,
}) => {
  return (
    <S.Card>
      <S.Link to={`${routes.profile}/${id}/about`}>
        <S.ImageBlock>
          <S.Img src={avatarURL || image} />
        </S.ImageBlock>
      </S.Link>
      <S.Title>{login}</S.Title>
      <S.FollowList>
        <S.Followers>Followers: {followers || 0}</S.Followers>
        <S.Following>Following: {following || 0}</S.Following>
      </S.FollowList>
      <S.FollowButton>
        <Button>Follow</Button>
      </S.FollowButton>
    </S.Card>
  );
};

export default memo(Card);
