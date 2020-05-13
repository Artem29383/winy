import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'assets/images/Icons.styled';
import settingNav from 'assets/images/settingNav.svg';
import SelectList from 'components/SelectList';
import useClickAway from 'hooks/useClickAway';
import useAction from 'hooks/useAction';
import { logOutUser } from 'models/user/reducer';
import S from './SettingButton.styled';

const SettingButton = ({ isHide }) => {
  const { ref, active, toggle } = useClickAway();
  const userExit = useAction(logOutUser);
  const logOut = () => {
    userExit();
  };

  return (
    <S.Setting ref={ref} isHide={isHide}>
      <Icons.SettingNav onClick={toggle} active={active}>
        <use xlinkHref={`${settingNav}#settingNav`} />
      </Icons.SettingNav>
      <SelectList
        isHide={isHide}
        options={['Exit', 'Select1', 'Select2']}
        callbacks={[logOut]}
        active={active}
        toggle={toggle}
      />
    </S.Setting>
  );
};

SettingButton.propTypes = {
  isHide: PropTypes.bool,
};

export default SettingButton;
