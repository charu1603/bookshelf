import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="fixed w-full mt-3 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between bg-transparent backdrop-blur-lg rounded-full bg-[#333133] shadow-lg max-h-14 py-2 px-2">
          <div className="flex-grow flex items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <div className="py-1 px-3 font-bold text-[#38bdf8] text-2xl">
                <Link to="/" className="">
                 BooksMania
                </Link>
              </div>
              <div className="py-1 px-3">
                <Link to="/bookmarks" className="text-sm  flex items-center">
                  Bookshelf <FaBookmark className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
