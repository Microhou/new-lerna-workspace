import React from 'react';
import PropTypes from 'prop-types';

export const PrimaryButton = ({ onClick, label }) => (
  <button type="button" onClick={onClick}>
    {label}
  </button>
);

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};