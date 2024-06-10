import React,{useState} from 'react'
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Featured from '../Components/Featured'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
      setSearchTerm(term);
    };
  return (
    <><Navbar />
    <Hero onSearch={handleSearch}/>
    <Featured searchTerm={searchTerm}/></>
  )
}

export default Home