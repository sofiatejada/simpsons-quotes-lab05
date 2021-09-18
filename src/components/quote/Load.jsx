import React from 'react';
import PropTypes from 'prop-types';

export default function Load({ onClick }) {
  return (
    <div>
      <button onClick={onClick} aria-label="get a quote button">
        Get a quote!
      </button>
    </div>
  );
}

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};
