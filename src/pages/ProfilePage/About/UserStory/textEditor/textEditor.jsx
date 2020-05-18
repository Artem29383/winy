import React, { useCallback } from 'react';
import ClassicEditor from 'src/ckeditor/ckeditor';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import S from './textEditor.styled';

const TextEditor = ({ setHTMLContent, htmlContent, isLoad }) => {
  const changeBlur = useCallback(
    (e, editor) => {
      setHTMLContent(editor.getData());
    },
    [htmlContent]
  );

  return (
    <S.Editor>
      <CKEditor
        disabled={isLoad}
        data={htmlContent}
        editor={ClassicEditor}
        onBlur={changeBlur}
      />
    </S.Editor>
  );
};

TextEditor.propTypes = {
  htmlContent: PropTypes.string,
  setHTMLContent: PropTypes.func.isRequired,
  isLoad: PropTypes.bool,
};

export default TextEditor;
