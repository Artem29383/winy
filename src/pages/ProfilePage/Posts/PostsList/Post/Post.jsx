import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Icons from 'assets/images/Icons.styled';
import like from 'assets/images/posts/like.svg';
import disLike from 'assets/images/posts/dislike.svg';
import Images from 'pages/ProfilePage/Posts/PostsList/Post/Images';
import PostHeader from 'pages/ProfilePage/Posts/PostsList/Post/PostHeader';
import S from './Post.styled';

const Post = ({
  userId,
  avatarURL,
  login,
  date,
  id,
  images,
  dislikes,
  likes,
  value,
  isOwner,
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
      />
      <S.PostBody>
        <S.Text>{ReactHtmlParser(value)}</S.Text>
        <Images images={images} />
      </S.PostBody>
      <S.PostFooter>
        <S.SvgWrap>
          <Icons.Like>
            <use xlinkHref={`${like}#like`} />
          </Icons.Like>
          <S.Count>{likes}</S.Count>
        </S.SvgWrap>
        <S.SvgWrap>
          <Icons.DisLike>
            <use xlinkHref={`${disLike}#disLike`} />
          </Icons.DisLike>
          <S.Count>{dislikes}</S.Count>
        </S.SvgWrap>
      </S.PostFooter>
    </S.Post>
  );
};

Post.propTypes = {
  userId: PropTypes.string,
  login: PropTypes.string,
  avatarURL: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  id: PropTypes.string,
  images: PropTypes.array,
  date: PropTypes.string,
  value: PropTypes.string,
  isOwner: PropTypes.bool,
};

export default Post;
