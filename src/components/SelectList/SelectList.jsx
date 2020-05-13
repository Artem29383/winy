import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import S from './SelectList.styled';

const SelectList = ({ options, callbacks = [], active, toggle, isHide }) => {
  const closeSettingKey = e => {
    if (e.key === 'Escape' && active) {
      toggle();
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('keydown', closeSettingKey);
    } else {
      document.removeEventListener('keydown', closeSettingKey);
    }
  }, [active]);

  return (
    <S.SelectList in={active} unmountOnExit timeout={100} isHide={isHide}>
      {options.map((opt, i) => (
        <S.SelectListItem key={opt} onClick={callbacks[i]} onMouseUp={toggle}>
          {opt}
        </S.SelectListItem>
      ))}
    </S.SelectList>
  );
};

SelectList.propTypes = {
  options: PropTypes.array,
  callbacks: PropTypes.array,
  active: PropTypes.bool,
  toggle: PropTypes.func,
  isHide: PropTypes.bool,
};

export default SelectList;
