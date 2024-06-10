
import React, { createContext, useContext, useState, useEffect } from 'react';

const BookmarkContext = createContext();

export const useBookmark = () => useContext(BookmarkContext);

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addToBookmark = (book) => {
    setBookmarks((prevBooks) => [...prevBooks, book]);
  };

  const removeFromBookmark = (bookId) => {
    setBookmarks((prevBooks) => prevBooks.filter(book => book.id !== bookId));
  };

  const isBookInBookmark = (book) => {
    return bookmarks.some(b => b.id === book.id);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addToBookmark, removeFromBookmark, isBookInBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;

