import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'assets/images/Icons.styled';
import like from 'assets/images/posts/like.svg';
import useAction from 'hooks/useAction';
import { firebaseLikeHandle, firebaseSetTotalLikes } from 'models/user/reducer';
import useSelector from 'hooks/useSelector';
import { ownerIdSelector } from 'models/auth/selectors';
import { totalLikesSelector } from 'models/user/selectors';
import S from './PostFooter.styled';

const PostFooter = ({ likes, id, userId, usersWhoLike }) => {
  const uid = useSelector(ownerIdSelector);
  const totalLikes = useSelector(totalLikesSelector);
  const likeChangeHandle = useAction(firebaseLikeHandle);
  const totalLikesChange = useAction(firebaseSetTotalLikes);
  const isLike = usersWhoLike[uid];
  const likeHandle = () => {
    const likeObject = {
      postId: id,
      userId,
      usersWhoLike,
      likes,
      isLike: true,
      uid,
    };
    if (isLike) {
      likeObject.isLike = false;
      likeObject.likes = likes - 1;
      likeChangeHandle(likeObject);
      totalLikesChange({
        totalLikes: totalLikes - 1,
        userId,
      });
    } else {
      likeObject.isLike = true;
      likeObject.likes = likes + 1;
      likeChangeHandle(likeObject);
      totalLikesChange({
        totalLikes: totalLikes + 1,
        userId,
      });
    }
  };

  return (
    <S.PostFooter>
      <S.SvgWrap className={isLike && 'like'}>
        <Icons.Like onClick={likeHandle}>
          <use xlinkHref={`${like}#like`} />
        </Icons.Like>
        <S.Count className={isLike && 'like'}>{likes}</S.Count>
      </S.SvgWrap>
    </S.PostFooter>
  );
};

PostFooter.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.string,
  userId: PropTypes.string,
  usersWhoLike: PropTypes.object,
};

PostFooter.defaultProps = {
  usersWhoLike: {},
};

export default PostFooter;
