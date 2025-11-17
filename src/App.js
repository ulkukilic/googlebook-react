import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from './Components/Books/HomePage';
import SearchBooks from './Components/Books/SearchBook';
import { useState } from 'react';

function App() {
   const [searchQuery, setSearchQuery] = useState('Pride and Prejudice'); // eger arama yapilmazsa direk ask ve grurudan basla eger yapilirsa setSearchQuery den basla 
   const [books, setBooks] = useState([]);
  return (
     <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchBooks searchQuery={searchQuery} setBooks={setBooks} />
      <HomePage books={books} />
      <Footer />
    </div>
  );
}

export default App;
