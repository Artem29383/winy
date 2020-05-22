import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from 'pages/ProfilePage/Posts/PostCreater/Footer/Footer';
import PostPlace from 'pages/ProfilePage/Posts/PostCreater/PostPlace';
import S from './PostCreater.styled';

const PostCreater = ({ lowAvatarURL }) => {
  const creator = useRef(null);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');

  return (
    <S.PostCreater ref={creator}>
      <PostPlace
        lowAvatarURL={lowAvatarURL}
        edit={edit}
        setEdit={setEdit}
        creator={creator}
        value={value}
        setValue={setValue}
      />
      {edit && <Footer />}
    </S.PostCreater>
  );
};

PostCreater.propTypes = {
  lowAvatarURL: PropTypes.string,
};

export default PostCreater;
