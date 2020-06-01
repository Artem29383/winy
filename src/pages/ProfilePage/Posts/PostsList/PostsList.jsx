import React from 'react';
import PropTypes from 'prop-types';
import Post from 'pages/ProfilePage/Posts/PostsList/Post';
import { sortByData } from 'utils/sortByData';
import S from './PostsList.styled';

const PostsList = ({
  avatarURL,
  userId,
  login,
  posts,
  isOwner,
  totalLikes,
}) => {
  const { entities } = posts;
  const sortElem = sortByData(entities, 'dateForSort', 'desc');
  return (
    <S.Posts>
      {sortElem.map(elem => (
        <Post
          isOwner={isOwner}
          key={elem.id}
          avatarURL={avatarURL}
          login={login}
          userId={userId}
          totalLikes={totalLikes}
          {...elem}
        />
      ))}
    </S.Posts>
  );
};

PostsList.propTypes = {
  userId: PropTypes.string,
  login: PropTypes.string,
  avatarURL: PropTypes.string,
  isOwner: PropTypes.bool,
  posts: PropTypes.object.isRequired,
  totalLikes: PropTypes.number,
};

export default PostsList;
