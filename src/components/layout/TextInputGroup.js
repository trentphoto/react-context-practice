import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  onFocus,
  onBlur,
  err
}) => {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': err
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        />
      { err && <div className="invalid-feedback">Please enter a value.</div> }
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  err: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup
