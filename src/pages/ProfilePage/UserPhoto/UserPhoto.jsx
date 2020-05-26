import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import useToggle from 'hooks/useToggle';
import useSelector from 'hooks/useSelector';
import { progressUploadSelector } from 'models/app/selectors';
import useAction from 'hooks/useAction';
import { firebaseUploadAvatarUser } from 'models/user/reducer';
import Modal from 'components/Modal';
import FileInput from 'components/FileInput';
import Portal from 'components/Portal';
import { usePhotoWork } from 'hooks/usePhotoWork';
import S from './UserPhoto.styled';

const UserPhoto = ({ avatarURL, uid, isOwner }) => {
  const [showModal, setShowModal] = useToggle(false);
  const progressUpload = useSelector(progressUploadSelector);
  const [isLoad, setIsLoading] = useToggle(false);
  const uploadAvatar = useAction(firebaseUploadAvatarUser);
  const { image, changeHandle, setImage } = usePhotoWork();

  useEffect(() => {
    if (isLoad) {
      if (showModal) {
        setShowModal();
      }
      setIsLoading();
      setImage(null);
    }
  }, [avatarURL]);

  const clickHandle = () => {
    setIsLoading();
    uploadAvatar({
      uid,
      image,
      lowImage: image,
    });
  };

  return (
    <>
      <S.Photo isOwner={isOwner}>
        {isOwner ? (
          <S.Img src={avatarURL} onClick={setShowModal} />
        ) : (
          <S.Img src={avatarURL} />
        )}
      </S.Photo>
      <Portal id="modal">
        <Modal
          isOpen={showModal}
          toggle={setShowModal}
          width="350"
          title="Upload a new image"
          buttons={[
            {
              text: 'Upload',
              callback: clickHandle,
              className: 'accept',
              isLoad: false,
            },
          ]}
          isFooter={!!image}
        >
          <S.WrapInputFile>
            <FileInput
              changeHandle={changeHandle}
              fileName={image === null ? '' : image.name}
              isLoading={isLoad}
              progress={progressUpload}
            />
          </S.WrapInputFile>
        </Modal>
      </Portal>
    </>
  );
};

UserPhoto.propTypes = {
  uid: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
  isOwner: PropTypes.bool.isRequired,
};

export default memo(UserPhoto);
