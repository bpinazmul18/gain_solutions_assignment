import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Modal({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal Header */}
              <div className="bg-viridian-green py-[27px] px-[30px] flex items-center justify-between">
                <h4 className="text-white font-semibold text-fs-22">{title}</h4>
                <button
                  className="hover:cursor-pointer"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {/* Modal Body */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
              </div>
              {/* Modal Footer */}
              <div className="flex justify-end bg-white py-5 px-[30px] border-t border-light-gray">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-next flex items-center px-[30px] py-2.5 rounded-[5px] font-normal text-fs-14 text-white mr-2.5"
                >
                  <svg
                    className="mr-1.5"
                    width="12.5"
                    height="12.5"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 14.25C10.9518 14.25 13.75 11.4518 13.75 8C13.75 4.54822 10.9518 1.75 7.5 1.75C4.04822 1.75 1.25 4.54822 1.25 8C1.25 11.4518 4.04822 14.25 7.5 14.25Z"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.375 6.125L5.625 9.875"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.625 6.125L9.375 9.875"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Cancel
                </button>

                <button
                  type="button"
                  className="bg-viridian-green flex items-center px-[30px] py-2.5 rounded-[5px] font-normal text-fs-14 text-white"
                >
                  <svg
                    className="mr-1.5"
                    width="12"
                    height="12"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.75 7.42498V7.99998C13.7492 9.34774 13.3128 10.6591 12.5058 11.7386C11.6989 12.8181 10.5646 13.6078 9.2721 13.9899C7.97964 14.3721 6.59829 14.3262 5.33404 13.8591C4.0698 13.392 2.99041 12.5288 2.25685 11.3981C1.52329 10.2675 1.17487 8.93002 1.26355 7.58517C1.35223 6.24033 1.87325 4.96018 2.74892 3.93565C3.6246 2.91111 4.80799 2.19709 6.12262 1.90007C7.43725 1.60304 8.81267 1.73894 10.0438 2.28748"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.75 3L7.5 9.25625L5.625 7.38125"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal
