import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { useBookmark } from '../context/BookmarkContext';

export default function Featured({ initialSearchTerm }) {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');
  const [category, setCategory] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const { addToBookmark, removeFromBookmark, isBookInBookmark } = useBookmark();

  const fetchBooks = async (query) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    if (category) {
      url += `+subject:${category}`;
    }

    if (publicationDate) {
      url += `&orderBy=newest`;
    }

    try {
      const response = await axios.get(url);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    const defaultQuery = 'bestsellers';
    fetchBooks(searchTerm || defaultQuery);
  }, [searchTerm, category, publicationDate]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(searchTerm);
  };

  const coverImage = (book) =>
    book.volumeInfo.imageLinks?.thumbnail ||
    `https://via.placeholder.com/128x193.png?text=No+Cover`;

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div className="flex flex-col items-center pt-14 sm:pt-20 pb-8 sm:pb-12 bg-black text-white px-12">
      <div className="w-full sm:w-7/10 space-y-4 mb-8 ">
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured
            </h1>
            <p className="text-left w-full sm:w-4/5">
              Explore our cutting-edge dashboard
            </p>
          </div>
          <div className='flex flex-col sm:flex-row '>
            <form onSubmit={handleSearch} className=" max-w-lg px-4 flex flex-col sm:flex-row gap-6 mb-8 text-black">
              <div className="relative w-full">
                <input
                  type="text"
                  name="q"
                  className="w-full border focus:outline-none h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className=" mt-2 mr-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="w-full max-w-lg px-4 flex flex-col sm:flex-row gap-6 mb-8 text-black">
              <select
                className="w-full focus:outline-none border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="science">Science</option>
                <option value="history">History</option>
              </select>
              <select
                className="w-full focus:outline-none border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
              >
                <option value="">Any Date</option>
                <option value="newest">Newest</option>
                <option value="lastYear">Last Year</option>
                <option value="last5Years">Last 5 Years</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-12 w-full">
        {books.map((book) => (
          <div key={book.id} className="flex flex-col">
            <img
              src={coverImage(book)}
              alt={book.volumeInfo.title}
              className="w-full h-96 object-cover rounded-lg cursor-pointer"
              onClick={() => handleViewDetails(book)}
            />
            <div className="p-2 flex justify-between">
              <h6 className="text-md">{book.volumeInfo.title}</h6>
              <button
                onClick={() => addToBookmark(book)}
                className="text-primary"
              >
                {isBookInBookmark(book) ? <FaBookmark /> : <FaRegBookmark />}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center h-screen'>
  {selectedBook && (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10">
      <div className="bg-black "></div>
      <div className="bg-gray-900 text-white rounded-lg p-8 overflow-y-auto" style={{ height: '450px', width: '750px' }}>
       <div className='flex justify-between'>
        <h2 className="text-2xl font-bold mb-4">{selectedBook.volumeInfo.title}</h2>
        <button
          onClick={handleCloseDetails}
          className="w-12 bg-white text-gray-500 hover:text-gray-700"
        >
          &#10005;
        </button></div>
        <div className='flex gap-12'>
        <img
          src={coverImage(selectedBook)}
          alt={selectedBook.volumeInfo.title}
          className="w-48 h-64 object-cover rounded-lg mb-4"
        />
        <div className='flex flex-col'>
        <p className="mb-4">{selectedBook.volumeInfo.description}</p>
        <p>Rating: {selectedBook.volumeInfo.averageRating || 'N/A'}</p>
        <p className="mb-2">Author(s): {selectedBook.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
        <p className="mb-2">Publisher: {selectedBook.volumeInfo.publisher || 'Unknown'}</p>
        <p className="mb-2">Published Date: {selectedBook.volumeInfo.publishedDate || 'Unknown'}</p>
        <p className="mb-2">Page Count: {selectedBook.volumeInfo.pageCount || 'Unknown'}</p>
        <p className="mb-2">Categories: {selectedBook.volumeInfo.categories?.join(', ') || 'Unknown'}</p>
        </div>
        </div>

        {/* Add more details here */}
      </div>
    </div>
  )}
</div>
</div>
  );
}
