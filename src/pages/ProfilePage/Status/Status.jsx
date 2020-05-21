import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useAction from 'hooks/useAction';
import { firebaseUpdateStatus } from 'models/user/reducer';
import S from './Status.styled';

const Status = ({ userStatus, uid, isOwner }) => {
  const MAX_LENGTH_STATUS = 100;
  const [edit, setEdit] = useState(false);
  const [temp, setTemp] = useState('');
  const reference = useRef(null);
  const [value, setValue] = useState(userStatus);
  const [status, setStatus] = useState(userStatus);
  const setNewStatus = useAction(firebaseUpdateStatus);

  useEffect(() => {
    if (reference.current) {
      setStatus(userStatus);
    }
  }, []);

  const startEditStatus = () => {
    if (!edit) {
      setEdit(true);
    }
  };

  useEffect(() => {
    if (reference.current && edit) {
      reference.current.focus();
      reference.current.textContent = userStatus.trim();
      const { firstChild } = reference.current;
      if (firstChild) {
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(firstChild, firstChild.length);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }, [edit]);

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
        sel.removeAllRanges();
        sel.addRange(range);
      }
    },
    [value]
  );

  const endEditStatusBlur = () => {
    setEdit(false);
    setStatus(value);
    reference.current.textContent = value.trim();
    if (value.trim() !== status.trim()) {
      setNewStatus({
        status: value,
        uid,
      });
    }
  };

  const endEditStatusKey = useCallback(
    e => {
      if (e.key === 'Enter') {
        setEdit(false);
        setStatus(value);
        reference.current.textContent = value.trim();
        if (status.trim() !== value.trim()) {
          setNewStatus({
            status: value,
            uid,
          });
        }
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

  return isOwner ? (
    <S.UserStatus>
      {edit ? (
        <S.StatusField
          ref={reference}
          contentEditable={edit}
          onInput={changeHandle}
          onKeyDown={endEditStatusKey}
          onBlur={endEditStatusBlur}
        />
      ) : (
        <S.DefaultStatus isOwner={isOwner} onClick={startEditStatus}>
          {status || 'Изменить статус'}
        </S.DefaultStatus>
      )}
    </S.UserStatus>
  ) : (
    <S.UserStatus>
      <S.DefaultStatus isOwner={isOwner}>
        {status || 'Изменить статус'}
      </S.DefaultStatus>
    </S.UserStatus>
  );
};

Status.propTypes = {
  uid: PropTypes.string,
  userStatus: PropTypes.string,
  isOwner: PropTypes.bool.isRequired,
};

export default memo(Status);
