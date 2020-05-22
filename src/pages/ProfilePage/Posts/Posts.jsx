import React from 'react';
import PropTypes from 'prop-types';
import PostCreater from 'pages/ProfilePage/Posts/PostCreater';
import S from './Posts.styled';

const Posts = ({ lowAvatarURL }) => {
  return (
    <S.Content>
      <PostCreater lowAvatarURL={lowAvatarURL} />
    </S.Content>
  );
};

Posts.propTypes = {
  lowAvatarURL: PropTypes.string,
};

export default Posts;
