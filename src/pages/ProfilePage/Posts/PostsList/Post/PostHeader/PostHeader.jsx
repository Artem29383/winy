import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import routes from 'constants/routes';
import cross from 'assets/images/posts/close.svg';
import Icons from 'assets/images/Icons.styled';
import Portal from 'components/Portal';
import Modal from 'components/Modal';
import useToggle from 'hooks/useToggle';
import useAction from 'hooks/useAction';
import { firebaseRemoveUserPost } from 'models/user/reducer';
import useSelector from 'hooks/useSelector';
import { successMsgSelector } from 'models/app/selectors';
import { SUCCESS_MSG } from 'constants/constants';
import { setSuccess } from 'models/app/reducer';
import useFetchingError from 'hooks/useFetchingError';
import S from './PostHeader.styled';

const PostHeader = ({ avatarURL, userId, login, date, id, isOwner }) => {
  const { fetchError } = useFetchingError();
  const msgSuccess = useSelector(successMsgSelector);
  const [showModal, setShowModal] = useToggle(false);
  const removePost = useAction(firebaseRemoveUserPost);
  const [isLoad, setIsLoad] = useState(false);
  const setSuccessMSG = useAction(setSuccess);

  useEffect(() => {
    if (msgSuccess.trim() && msgSuccess === SUCCESS_MSG.postRemoved) {
      setSuccessMSG('');
      setIsLoad(false);
      if (showModal) {
        setShowModal();
      }
    }
  }, [msgSuccess]);

  const removePostHandle = () => {
    setIsLoad(true);
    removePost(id);
  };

  return (
    <>
      <S.PostHeader>
        <S.Ava>
          <S.AvaWrap>
            <S.AvaIMG src={avatarURL} />
          </S.AvaWrap>
        </S.Ava>
        <S.Title>
          <S.Name>
            <S.Link to={`${routes.profile}/${userId}`}>{login}</S.Link>
          </S.Name>
          <S.Time>{date}</S.Time>
        </S.Title>
        {isOwner && (
          <Icons.Cross onClick={setShowModal}>
            <use xlinkHref={`${cross}#closeImage`} />
          </Icons.Cross>
        )}
      </S.PostHeader>
      <Portal id="RemovePost">
        <Modal
          toggle={setShowModal}
          isOpen={showModal}
          width="350"
          title="Your post will be deleted"
          isBody={false}
          fetchError={fetchError}
          isLoad={isLoad}
          buttons={[
            {
              text: 'Accept',
              callback: removePostHandle,
              className: 'accept',
              isLoad: true,
            },
            {
              text: 'Close',
              callback: setShowModal,
              className: 'red',
              isLoad: false,
            },
          ]}
          isFooter
        />
      </Portal>
    </>
  );
};

PostHeader.propTypes = {
  avatarURL: PropTypes.string,
  userId: PropTypes.string,
  login: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  isOwner: PropTypes.bool,
};

export default PostHeader;
