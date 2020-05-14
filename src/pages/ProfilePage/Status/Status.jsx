import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useAction from 'hooks/useAction';
import { firebaseUpdateStatus } from 'models/user/reducer';
import S from './Status.styled';

const Status = ({ userStatus, uid }) => {
  const MAX_LENGTH_STATUS = 100;
  const [edit, setEdit] = useState(false);
  const [temp, setTemp] = useState('');
  const reference = useRef(null);
  const [value, setValue] = useState(userStatus);
  const [status, setStatus] = useState(userStatus);
  const setNewStatus = useAction(firebaseUpdateStatus);

  useEffect(() => {
    if (reference.current) {
      reference.current.textContent = userStatus.trim();
    }
  }, []);

  const startEditStatus = () => {
    if (!edit) {
      setEdit(true);
      setTimeout(() => {
        reference.current.focus();
      }, 100);
    }
  };

  const changeHandle = useCallback(
    e => {
      setValue(e.currentTarget.textContent);
      if (value.length + 1 < MAX_LENGTH_STATUS) {
        setTemp(e.currentTarget.textContent);
      }
      if (value.length > MAX_LENGTH_STATUS - 1) {
        const range = document.createRange();
        const sel = window.getSelection();
        reference.current.textContent = temp.trim();
        range.setStart(reference.current.firstChild, MAX_LENGTH_STATUS - 1);
        // range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    },
    [value]
  );

  const endEditStatusBlur = () => {
    if (value.trim() !== status.trim()) {
      setEdit(false);
      setStatus(value);
      reference.current.textContent = value.trim();
      setNewStatus({
        status: value,
        uid,
      });
    }
  };

  const endEditStatusKey = useCallback(
    e => {
      if (e.key === 'Enter' && status.trim() !== value.trim()) {
        setEdit(false);
        setStatus(value);
        reference.current.textContent = value.trim();
        setNewStatus({
          status: value,
          uid,
        });
      }
      if (e.key === 'Escape') {
        setEdit(false);
        setStatus(status);
        reference.current.textContent = status.trim();
      }
      if (e.key === 'Backspace' || e.key === 'Delete') {
        setValue(e.currentTarget.textContent);
      }
    },
    [value, status]
  );

  return (
    <S.UserStatus>
      <S.StatusField
        ref={reference}
        onClick={startEditStatus}
        contentEditable={edit}
        onInput={changeHandle}
        onKeyDown={endEditStatusKey}
        onBlur={endEditStatusBlur}
      />
    </S.UserStatus>
  );
};

Status.propTypes = {
  uid: PropTypes.string,
  userStatus: PropTypes.string,
};

export default memo(Status);
