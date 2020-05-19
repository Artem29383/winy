import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useToggle from 'hooks/useToggle';
import useInput from 'hooks/useInput';
import useAction from 'hooks/useAction';
import { firebaseUploadDetails } from 'models/user/reducer';
import useFetchingError from 'hooks/useFetchingError';
import S from './DetailItem.styled';

const DetailItem = ({ id, field, text }) => {
  const [edit, setEdit] = useToggle(false);
  const { isLoad, setIsLoading, action, setAction } = useFetchingError();
  const [value, setValue, setDefaultHandle] = useInput(text);
  const setDetails = useAction(firebaseUploadDetails);

  useEffect(() => {
    if (isLoad && action) {
      setAction('');
    }
  }, [isLoad]);

  const stopEditKey = e => {
    if (e.key === 'Enter') {
      setEdit();
      setIsLoading(true);
      setAction(id);
      setDetails({ id, field, text: value });
    }
    if (e.key === 'Escape') {
      setDefaultHandle(text);
      setEdit();
    }
  };

  const stopEditBlur = () => {
    setEdit();
    setIsLoading(true);
    setAction(id);
    setDetails({ id, field, text: value });
  };

  return (
    <S.DetailsItem key={field}>
      <S.TitleItem>{field}</S.TitleItem>
      {edit || (isLoad && action === id) ? (
        <S.Input
          autoFocus
          onBlur={stopEditBlur}
          onKeyDown={stopEditKey}
          onChange={setValue}
          value={value}
        />
      ) : (
        <S.TextItem onClick={setEdit}>{value || '-'}</S.TextItem>
      )}
    </S.DetailsItem>
  );
};

DetailItem.propTypes = {
  id: PropTypes.string,
  field: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default DetailItem;
