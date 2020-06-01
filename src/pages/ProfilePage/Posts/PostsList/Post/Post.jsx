import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Images from 'pages/ProfilePage/Posts/PostsList/Post/Images';
import PostHeader from 'pages/ProfilePage/Posts/PostsList/Post/PostHeader';
import PostFooter from 'pages/ProfilePage/Posts/PostsList/Post/PostFooter';
import S from './Post.styled';

const Post = ({
  userId,
  avatarURL,
  login,
  date,
  id,
  images,
  likes,
  value,
  isOwner,
  usersWhoLike,
  totalLikes,
}) => {
  return (
    <S.Post>
      <PostHeader
        userId={userId}
        login={login}
        avatarURL={avatarURL}
        id={id}
        date={date}
        isOwner={isOwner}
        totalLikes={totalLikes}
        likes={likes}
      />
      <S.PostBody>
        <S.Text>{ReactHtmlParser(value)}</S.Text>
        <Images images={images} />
      </S.PostBody>
      <PostFooter
        likes={likes}
        userId={userId}
        id={id}
        usersWhoLike={usersWhoLike}
      />
    </S.Post>
  );
};

Post.propTypes = {
  userId: PropTypes.string,
  login: PropTypes.string,
  avatarURL: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string,
  images: PropTypes.array,
  date: PropTypes.string,
  value: PropTypes.string,
  isOwner: PropTypes.bool,
  usersWhoLike: PropTypes.object,
  totalLikes: PropTypes.number,
};

export default Post;
