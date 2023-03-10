import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

function InputSelect({ label, inputHint }) {
  return (
    <div className="mb-[15px]">
      <label htmlFor="tag" className="font-normal text-fs-14 text-sonic-silver">
        {label}
      </label>
      <div className="mt-2.5">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={[]}
          placeholder={inputHint}
        />
      </div>
    </div>
  )
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  inputHint: PropTypes.string.isRequired,
}

export default InputSelect
