import React from 'react'
import Input from './Input'

function Form() {
  return (
    <form>
      <Input
        type="text"
        name="productName"
        label="Product name"
        inputHint="Enter your product name"
      />
      <div className="flex w-full">
        <div className="flex-1 pr-[15px]">
          <Input
            type="text"
            name="brand"
            label="Brand"
            inputHint="Enter brand name"
          />
        </div>
        <div className="flex-1 pl-[15px]">
          <Input
            type="text"
            name="ramRom"
            label="Ram/Rom"
            inputHint="Enter Ram/Rom"
          />
        </div>
      </div>
    </form>
  )
}

export default Form
