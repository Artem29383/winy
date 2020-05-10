import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import eye from 'assets/images/eye.svg';
import Eye from 'assets/images/eye.styled';
import S, { InputField, Label } from './TextField.styled';

const TextField = ({
  label,
  value,
  register,
  name,
  type,
  focus,
  errors,
  className,
  onChange,
  onKeyHandler,
  onBlur,
}) => {
  const [inputType, setInputType] = useState(type);

  const passHandle = useCallback(() => {
    const thisType = inputType === 'password' ? 'text' : 'password';
    setInputType(thisType);
  }, [inputType]);

  return (
    <>
      <S.Group className={className}>
        <InputField
          placeholder=" "
          value={value}
          onChange={onChange}
          ref={register}
          name={name}
          className={errors && 'error'}
          type={inputType}
          autoFocus={focus}
          onKeyDown={onKeyHandler}
          onBlur={onBlur}
        />
        <Label>{label}</Label>
        {type === 'password' && (
          <Eye.Icon onMouseDown={passHandle} onMouseUp={passHandle}>
            <use xlinkHref={`${eye}#eye`} />
          </Eye.Icon>
        )}
      </S.Group>
      {errors && <S.Error>{errors.message}</S.Error>}
    </>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  focus: PropTypes.bool,
  errors: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onKeyHandler: PropTypes.func,
  onBlur: PropTypes.func,
};

TextField.defaultProps = {
  type: 'text',
  focus: false,
};

export default memo(TextField);
