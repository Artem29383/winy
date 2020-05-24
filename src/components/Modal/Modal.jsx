import React from 'react';
import PropTypes from 'prop-types';
import useModal from 'hooks/useModal';
import Cross from 'components/Cross';
import Button from 'components/Button';
import { ternaryCheckError } from 'utils/ternaryCheckError';
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
 * className: string ['close', 'red']
 * isLoad: boolean,
 * }]
 * @param isFooter
 * @param title
 * @param isBody: boolean
 * @param fetchError string,
 * @param isLoad boolean,
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
  isBody,
  fetchError,
  isLoad,
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
        {isBody && <S.Body>{children}</S.Body>}
        {isFooter && (
          <S.Footer counts={buttons.length}>
            {buttons.map(btn => (
              <S.ButtonWrap key={btn.text}>
                <Button
                  onClickHandler={btn.callback}
                  className={btn.className}
                  isLoader={btn.isLoad}
                >
                  {btn.isLoad
                    ? ternaryCheckError(isLoad, fetchError, btn.text)
                    : btn.text}
                </Button>
              </S.ButtonWrap>
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
  isBody: PropTypes.bool,
  fetchError: PropTypes.string,
  isLoad: PropTypes.bool,
};

Modal.defaultProps = {
  isClosable: true,
  width: '300',
  isFooter: false,
  title: 'Modal',
  isBody: true,
};

export default Modal;
