import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'assets/images/Icons.styled';
import like from 'assets/images/posts/like.svg';
import useAction from 'hooks/useAction';
import { firebaseLikeHandle } from 'models/user/reducer';
import { removePropFromObject } from 'utils/removePropFromObject';
import useSelector from 'hooks/useSelector';
import {
  initialUserDataSelector,
  ownerIdSelector,
} from 'models/auth/selectors';
import S from './PostFooter.styled';

const PostFooter = ({ likes, id, userId, usersWhoLike }) => {
  const uid = useSelector(ownerIdSelector);
  const likeChangeHandle = useAction(firebaseLikeHandle);
  const isLike = usersWhoLike[uid];
  const { likesInDay } = useSelector(initialUserDataSelector);

  const likeHandle = () => {
    if (isLike) {
      const usersWhoLikeCopy = removePropFromObject(usersWhoLike, uid);
      likeChangeHandle({
        postId: id,
        userId,
        usersWhoLike: usersWhoLikeCopy,
        likes: likes - 1,
        isLike: false,
        likesInDay,
      });
    } else {
      const usersWhoLikeCopy = { ...usersWhoLike, [uid]: true };
      likeChangeHandle({
        postId: id,
        userId,
        usersWhoLike: usersWhoLikeCopy,
        likes: likes + 1,
        isLike: true,
        likesInDay,
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
