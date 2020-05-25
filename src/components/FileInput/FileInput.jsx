import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'components/ProgressBar';
import S, { Label } from './FileInput.styled';

const FileInput = ({ changeHandle, fileName, isLoading, progress }) => {
  return (
    <S.Wrapper>
      {isLoading ? (
        <ProgressBar progress={progress} />
      ) : (
        <Label htmlFor="input">{fileName || 'Upload File'}</Label>
      )}
      <S.Input
        id="input"
        type="file"
        onChange={changeHandle}
        title=""
        style={{ cursor: 'pointer!important' }}
      />
    </S.Wrapper>
  );
};

FileInput.propTypes = {
  changeHandle: PropTypes.func,
  fileName: PropTypes.string,
  isLoading: PropTypes.bool,
  progress: PropTypes.number,
};

export default FileInput;
