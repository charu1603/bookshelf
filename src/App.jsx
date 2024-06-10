
import './App.css'
import BookmarkProvider from './context/BookmarkContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bookmark from './Pages/Bookmark';
import Home from './Pages/Home';
function App() {
 

  return (
   <div className="App">
    <BookmarkProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmark />} />
      
      </Routes>  
      </BookmarkProvider>  
   </div>
  )
}

export default App;
