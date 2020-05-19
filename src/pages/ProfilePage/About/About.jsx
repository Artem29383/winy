import React from 'react';
import PropTypes from 'prop-types';
import UserStory from 'pages/ProfilePage/About/UserStory';
import MyDetails from 'pages/ProfilePage/About/MyDetails';
import S from './About.styled';

const About = ({ about }) => {
  const { aboutUser, details } = about;

  return (
    <S.Content>
      <UserStory aboutUser={aboutUser} />
      <S.MyDetails>
        <S.TitleDetails>My Details</S.TitleDetails>
        <MyDetails details={details} />
      </S.MyDetails>
    </S.Content>
  );
};

About.propTypes = {
  about: PropTypes.object,
};

export default About;
