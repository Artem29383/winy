import React from 'react';
import S, { Label } from './TextArea.styled';

const TextArea = () => {
  return (
    <S.Group>
      <S.Textarea placeholder="Your Message" soft="off" />
      <Label>Your Status</Label>
    </S.Group>
  );
};

export default TextArea;
