import React from 'react';
import PropTypes from 'prop-types';
import useModal from 'hooks/useModal';
import Cross from 'components/Cross';
import Button from 'components/Button';
import S from './Modal.styled';

/** *
 * @param toggle
 * @param isOpen
 * @param isClosable
 * @param width
 * @param children
 * @param buttons = [{
 * text: string,
 * callback: func,
 * className: string ['close', 'accept']
 * }]
 * @param isFooter
 * @param title
 * @returns {*}
 * @constructor
 */

const Modal = ({
  toggle,
  isOpen,
  isClosable,
  width,
  children,
  buttons,
  isFooter,
  title,
}) => {
  useModal(toggle, isOpen, isClosable);
  return (
    <S.Overlay unmountOnExit in={isOpen} timeout={100}>
      {isClosable && <S.BackDrop onClick={toggle} />}
      <S.Modal appear in={isOpen} timeout={100} width={width}>
        <S.Header>
          <S.Title>{title}</S.Title>
          {isClosable && (
            <Cross
              position="absolute"
              right="10px"
              top="25px"
              rotate="45deg"
              clickHandle={toggle}
            />
          )}
        </S.Header>
        <S.Body>{children}</S.Body>
        {isFooter && (
          <S.Footer>
            {buttons.map(btn => (
              <Button
                onClickHandler={btn.callback}
                key={btn.text}
                className={btn.className}
              >
                {btn.text}
              </Button>
            ))}
          </S.Footer>
        )}
      </S.Modal>
    </S.Overlay>
  );
};

Modal.propTypes = {
  width: PropTypes.string,
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
  isClosable: PropTypes.bool,
  children: PropTypes.any,
  buttons: PropTypes.array,
  isFooter: PropTypes.bool,
  title: PropTypes.string,
};

Modal.defaultProps = {
  isClosable: true,
  width: '300',
  isFooter: false,
  title: 'Modal',
};

export default Modal;
