import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonGroup = props => {
  const {
    title,
    name,
    type,
    options,
    selectedOption,
    onChange,
    required
  } = props;

  return (
    <div className="form-input">
      <label className={required ? 'required' : null} htmlFor={name}>
        {title}
      </label>
      <div>
        <div className="radioGroup">
          {options.map(option => {
            return (
              <label className="labelRadio" key={option}>
                <input
                  className="inputRadio"
                  name={name}
                  onChange={onChange}
                  value={option}
                  checked={selectedOption.indexOf(option) > -1}
                  type={type}
                  required={required}
                />{' '}
                {option}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

RadioButtonGroup.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['radio']).isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default RadioButtonGroup;
