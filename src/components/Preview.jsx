import React from 'react';
import PropTypes from 'prop-types';

export default function Preview({educationInfo, backgroundInfo, experienceInfo}){
    const bkKeys = backgroundInfo.length > 0 ? Object.keys(backgroundInfo[0]) : [];

    return (
        <div>
          {bkKeys.map((key) => (
            <label key={key}>{backgroundInfo[0][key]}</label>
          ))}
        </div>
      );

}

Preview.propTypes = {
    educationInfo: PropTypes.array.isRequired,
    backgroundInfo: PropTypes.array.isRequired,
    experienceInfo: PropTypes.array.isRequired,
  };