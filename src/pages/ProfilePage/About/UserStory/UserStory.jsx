import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TextEditor from 'pages/ProfilePage/About/UserStory/textEditor';
import Button from 'components/Button/Button';
import { ternaryCheckError } from 'utils/ternaryCheckError';
import useToggle from 'hooks/useToggle';
import useAction from 'hooks/useAction';
import { setUserAboutContent } from 'models/user/reducer';
import useFetchingError from 'hooks/useFetchingError';
import ReactHtmlParser from 'react-html-parser';
import S from './UserStory.styled';

const UserStory = ({ aboutUser }) => {
  const [edit, setEdit] = useToggle(false);
  const [htmlContent, setHTMLContent] = useState(aboutUser);
  const setUserContent = useAction(setUserAboutContent);
  const [jsxContent, setJSXContent] = useState('');

  const {
    fetchError,
    isLoad,
    setIsLoading,
    setAction,
    action,
    idError,
  } = useFetchingError();

  useEffect(() => {
    setJSXContent(ReactHtmlParser(htmlContent));
    if (edit) {
      setEdit();
    }
  }, [aboutUser]);

  const saveJSXContent = () => {
    if (htmlContent === aboutUser) {
      setEdit();
      return;
    }
    setAction('saveAboutInfo');
    setIsLoading(true);
    setUserContent({ htmlContent });
  };

  return (
    <S.MySelfInfo>
      {edit ? (
        <div>
          <TextEditor
            setHTMLContent={setHTMLContent}
            htmlContent={htmlContent}
            isLoad={isLoad}
          />
          <S.FooterEditorButtons>
            <Button onClickHandler={saveJSXContent} isLoader>
              {ternaryCheckError(
                isLoad,
                fetchError,
                'Save',
                action,
                'saveAboutInfo',
                idError,
                'uploadContentError'
              )}
            </Button>
            <Button
              onClickHandler={setEdit}
              margin="0 0 0 15px"
              className="red"
            >
              Cancel
            </Button>
          </S.FooterEditorButtons>
        </div>
      ) : (
        <S.AboutContent onClick={setEdit}>
          {jsxContent.length !== 0 ? (
            jsxContent
          ) : (
            <S.DefaultWall>Расскажите о себе</S.DefaultWall>
          )}
        </S.AboutContent>
      )}
    </S.MySelfInfo>
  );
};

UserStory.propTypes = {
  aboutUser: PropTypes.string,
};

export default memo(UserStory);
