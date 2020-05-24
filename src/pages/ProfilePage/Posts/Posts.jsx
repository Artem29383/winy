import React from 'react';
import PropTypes from 'prop-types';
import PostCreater from 'pages/ProfilePage/Posts/PostCreater';
import PostsList from 'pages/ProfilePage/Posts/PostsList';
import noPosts from 'assets/images/posts/noposts.svg';
import Icons from 'assets/images/Icons.styled';
import S from './Posts.styled';

const Posts = ({ lowAvatarURL, avatarURL, userId, login, isOwner, posts }) => {
  return (
    <S.Content>
      {isOwner && <PostCreater lowAvatarURL={lowAvatarURL} />}
      {posts.ids.length > 0 ? (
        <PostsList
          isOwner={isOwner}
          avatarURL={avatarURL}
          userId={userId}
          login={login}
          posts={posts}
        />
      ) : (
        !isOwner && (
          <S.PostsNotYet>
            <S.SvgWrap>
              <Icons.NoPosts>
                <use xlinkHref={`${noPosts}#noPosts`} />
              </Icons.NoPosts>
            </S.SvgWrap>
            <S.Text>No wall posts yet</S.Text>
          </S.PostsNotYet>
        )
      )}
    </S.Content>
  );
};

Posts.propTypes = {
  lowAvatarURL: PropTypes.string,
  userId: PropTypes.string,
  login: PropTypes.string,
  avatarURL: PropTypes.string,
  isOwner: PropTypes.bool.isRequired,
  posts: PropTypes.object.isRequired,
};

export default Posts;
