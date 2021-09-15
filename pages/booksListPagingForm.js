import React, { useState, useEffect } from "react";
import Books from "../comps/Books";
import Pagination from "../comps/Pagination";

//import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  const fetchAllBooks = async () => {
    setLoading(true);
    await fetch("/api/SelectBooksCompt")
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  // Get current books by slice
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  console.log("currentBooks" + currentBooks);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Books books={currentBooks} loading={loading} />
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
        currentPage={currentPage}
        loading={loading}
      />
    </div>
  );
};

export default App;
