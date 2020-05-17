import React from 'react';
import ClassicEditor from 'src/ckeditor/ckeditor';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import S from './textEditor.styled';

// eslint-disable-next-line no-unused-vars
const TextEditor = ({ changeHandle, htmlContent }) => {
  return (
    <S.Editor>
      <CKEditor
        data={htmlContent}
        editor={ClassicEditor}
        onChange={changeHandle}
      />
    </S.Editor>
  );
};

TextEditor.propTypes = {
  htmlContent: PropTypes.string,
  changeHandle: PropTypes.func.isRequired,
};

export default TextEditor;
