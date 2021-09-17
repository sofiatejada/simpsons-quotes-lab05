import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote, character, image }) {
  return (
    <div>
      <img href={image} alt="{character} - {quote}" />
      <p>
        {quote} - {character}
      </p>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
