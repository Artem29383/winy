import React from 'react';
import PropTypes from 'prop-types';
import UserStory from 'pages/ProfilePage/About/UserStory';
import S from './About.styled';

const myDetails = [
  {
    field: 'Last Online',
    text: 'April 5',
  },
  {
    field: 'Orientation',
    text: 'Straight',
  },
  {
    field: 'Ethnicity',
    text: 'White',
  },
  {
    field: 'Height',
    text: '1.68m',
  },
  {
    field: 'BodyType',
    text: 'Size Zero',
  },
  {
    field: 'Diet',
    text: 'Vegetarian',
  },
  {
    field: 'Smokes',
    text: 'No',
  },
];

const About = ({ about }) => {
  const { aboutUser } = about;

  return (
    <S.Content>
      <UserStory aboutUser={aboutUser} />
      <S.MyDetails>
        <S.TitleDetails>My Details</S.TitleDetails>
        {myDetails.map(detail => (
          <S.DetailsItem key={detail.field}>
            <S.TitleItem>{detail.field}</S.TitleItem>
            <S.TextItem>{detail.text}</S.TextItem>
          </S.DetailsItem>
        ))}
      </S.MyDetails>
    </S.Content>
  );
};

About.propTypes = {
  about: PropTypes.object,
};

export default About;
