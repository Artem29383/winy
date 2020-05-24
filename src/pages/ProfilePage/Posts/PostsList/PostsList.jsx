import React from 'react';
import PropTypes from 'prop-types';
import Post from 'pages/ProfilePage/Posts/PostsList/Post';
import S from './PostsList.styled';

const PostsList = ({ avatarURL, userId, login, posts }) => {
  const { ids, entities } = posts;
  return (
    <S.Posts>
      {ids.map(id => (
        <Post
          key={id}
          avatarURL={avatarURL}
          login={login}
          userId={userId}
          {...entities[id]}
        />
      ))}
    </S.Posts>
  );
};

PostsList.propTypes = {
  userId: PropTypes.string,
  login: PropTypes.string,
  avatarURL: PropTypes.string,
  posts: PropTypes.object.isRequired,
};

export default PostsList;
