import React from 'react'

function Products() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-fs-24 font-semibold text-davys-grey">
          ALL Products
        </h2>
        <div className="flex items-center">
          <div className="mr-2.5 text-fs-16 font-normal text-sonic-silver">
            Sort by:
          </div>
          <div className="relative group">
            <select
              className="focus:outline-none font-normal text-fs-16 text-sonic-silver py-3 px-[30px] appearance-none border border-gray bg-white-next group-hover:bg-viridian-green group-hover:text-white"
              name="sortBy"
              id="sortBy"
            >
              <option value="AllProducts">All Products</option>
              <option value="BestValue">Best value</option>
              <option value="BestPerformance">Best Performance</option>
              <option value="BestCamera">Best Camera</option>
            </select>
            <svg
              className="stroke-sonic-silver group-hover:stroke-white absolute right-7 top-1/2 -mt-1"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
