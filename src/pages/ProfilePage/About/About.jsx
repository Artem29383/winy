import React, { useState } from 'react';
import TextEditor from 'pages/ProfilePage/About/textEditor';
import ReactHtmlParser from 'react-html-parser';
import S from './About.styled';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [jsxContent, setJSXContent] = useState('');
  const [htmlContent, setHTMLContent] = useState('12345');

  const changeHandle = (e, editor) => {
    console.log(editor.getData());
    setHTMLContent(editor.getData());
  };

  // eslint-disable-next-line no-unused-vars
  const saveJSXContent = () => {
    console.log(ReactHtmlParser(htmlContent));
    setHTMLContent(htmlContent);
  };

  return (
    <S.Content>
      <S.MySelfInfo>
        <TextEditor changeHandle={changeHandle} htmlContent={htmlContent} />
      </S.MySelfInfo>
      <S.MyDetails>123</S.MyDetails>
    </S.Content>
  );
};

export default About;
