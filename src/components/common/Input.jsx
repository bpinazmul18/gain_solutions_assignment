import React from 'react'
import PropTypes from 'prop-types'

function Input({ type, name, label, inputHint }) {
  return (
    <div className="flex flex-col mb-[15px]">
      <label
        htmlFor={name}
        className="font-normal text-fs-14 text-sonic-silver mb-[5px]"
      >
        {label}
      </label>
      <input
        type={type}
        className="py-2.5 px-[15px] border border-gray-next font-normal text-fs-14 text-sonic-silver placeholder:text-gray-next outline-none rounded focus:border-viridian-green"
        name={name}
        id={name}
        placeholder={inputHint}
      />
    </div>
  )
}

Input.defaultProp = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputHint: PropTypes.string.isRequired,
  //   error: PropTypes.string.isRequired,
}

export default Input
