import React from 'react'
import Input from './Input'
import InputSelect from './InputSelect'

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
      <InputSelect label="Tags" inputHint="Search and Select" />
      <Input
        type="text"
        name="price"
        label="Price"
        inputHint="Enter your product price"
      />
    </form>
  )
}

export default Form
