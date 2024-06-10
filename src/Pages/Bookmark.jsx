
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { useBookmark } from '../context/BookmarkContext';
import Navbar from '../Components/Navbar';

const Bookmark = () => {
  const { bookmarks, removeFromBookmark } = useBookmark();

  return (
    <><Navbar />
    <div className="container mx-auto py-24 px-6 bg-black text-white" style={{backgroundImage:`linear-gradient(#02294F, rgba(9, 14, 16, 0.0)`,backgroundSize:'100% 20%',backgroundRepeat:'no-repeat'}}>
          <h1 className="text-3xl font-bold mb-6 text-center">My Bookshelf</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {bookmarks.map((book) => (
                  <div key={book.id} className="flex flex-col h-full  rounded-lg  shadow-lg">
                      <img
                          src={book.volumeInfo.imageLinks?.thumbnail}
                          alt={book.volumeInfo.title}
                          className="w-full h-96 object-cover" />
                      <div className="py-4 flex flex-col justify-between h-full">
                          <div>
                              <h2 className="text-lg font-semibold">{book.volumeInfo.title}</h2>
                          </div>
                          <button
                              onClick={() => removeFromBookmark(book.id)}
                              className="mt-3 text-red-600 flex items-center"
                          >
                              <FaBookmark className="mr-2" /> Remove from Bookshelf
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div></>
  );
};

export default Bookmark;
