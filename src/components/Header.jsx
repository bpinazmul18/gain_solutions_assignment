import React from 'react'

import searchIcon from '../assets/img/search.svg'

function Header() {
  return (
    <header>
      <input
        type="checkbox"
        name="hbr"
        id="hbr"
        className="hbr peer"
        hidden
        aria-hidden="true"
      />
      <nav className="bg-viridian-green fixed z-20 w-full navbar peer-checked:navbar-active md:relative">
        <div className="xl:container m-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-5 md:gap-0">
            <div className="w-full flex justify-between lg:w-auto">
              <a
                href="!#"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <span className="text-fs-31 font-bold text-white">LOGO</span>
              </a>
              <label
                htmlFor="hbr"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                />
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"
                />
              </label>
            </div>
            {/* TODO */}
            <div className="navmenu hidden w-full flex-wrap justify-end items-center space-y-8 p-6 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:w-7/12">
              <div className=" lg:pr-4">
                <div className="flex items-center">
                  <form className="group relative mb-4 lg:mb-0">
                    <img
                      className="absolute right-7 top-1/2 -mt-2.5 "
                      src={searchIcon}
                      alt="Search Icon"
                    />
                    <input
                      className="w-full font-normal text-fs-15 bg-viridian-green outline-none border py-3 px-6 text-white placeholder-white"
                      type="text"
                      aria-label="Search by Title or Brand"
                      placeholder="Search by Title or Brand..."
                    />
                  </form>
                  <button
                    type="button"
                    className="text-fs-15 font-medium py-3 px-6 text-viridian-green bg-cultured ml-0 lg:ml-2.5 rounded-sm"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
