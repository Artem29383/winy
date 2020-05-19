import React from 'react';
import PropTypes from 'prop-types';
import UserStory from 'pages/ProfilePage/About/UserStory';
import DetailItem from 'pages/ProfilePage/About/DetailItem';
import S from './About.styled';

const About = ({ about }) => {
  const { aboutUser, details } = about;

  return (
    <S.Content>
      <UserStory aboutUser={aboutUser} />
      <S.MyDetails>
        <S.TitleDetails>My Details</S.TitleDetails>
        {Object.keys(details).map(key => (
          <DetailItem
            key={key}
            id={key}
            field={details[key].field}
            text={details[key].text}
          />
        ))}
      </S.MyDetails>
    </S.Content>
  );
};

About.propTypes = {
  about: PropTypes.object,
};

export default About;
