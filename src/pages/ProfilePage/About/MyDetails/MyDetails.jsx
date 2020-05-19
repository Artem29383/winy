import React from 'react';
import PropTypes from 'prop-types';
import DetailItem from 'pages/ProfilePage/About/MyDetails/DetailItem';

const MyDetails = ({ details }) => {
  return Object.keys(details).map(key => (
    <DetailItem
      key={key}
      id={key}
      field={details[key].field}
      text={details[key].text}
    />
  ));
};

MyDetails.propTypess = {
  details: PropTypes.object.isRequired,
};

export default MyDetails;
