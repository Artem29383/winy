import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useToggle from 'hooks/useToggle';
import useSelector from 'hooks/useSelector';
import { progressUploadSelector } from 'models/app/selectors';
import useAction from 'hooks/useAction';
import { firebaseUploadAvatarUser } from 'models/user/reducer';
import Modal from 'components/Modal';
import FileInput from 'components/FileInput';
import Portal from 'components/Portal';
import S from './UserPhoto.styled';

const UserPhoto = ({ avatarURL, uid }) => {
  const [showModal, setShowModal] = useToggle(false);
  const progressUpload = useSelector(progressUploadSelector);
  const [isLoad, setIsLoading] = useToggle(false);
  const [image, setImage] = useState(null);
  const uploadAvatar = useAction(firebaseUploadAvatarUser);

  const changeHandle = e => {
    const file = e.currentTarget.files[0];
    if (file) {
      const type = file.type.split('/');
      const size = Math.ceil(file.size / 1024);
      if (type[0] === 'image') {
        if (size < 1500) {
          setImage(file);
        }
      } else if (type[0] !== 'image' || size > 1500) {
        setImage(null);
      }
    }
  };

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
    });
  };

  return (
    <>
      <S.Photo>
        <S.Img src={avatarURL} onClick={setShowModal} />
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
  uid: PropTypes.string,
  avatarURL: PropTypes.string,
};

export default memo(UserPhoto);
