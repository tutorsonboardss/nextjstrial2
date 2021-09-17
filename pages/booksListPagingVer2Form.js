import React, { useState, useEffect } from "react";
import BooksVer2 from "../comps/BooksVer2";
import PaginationVer2 from "../comps/PaginationVer2";

//import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  const [booksTotalCount, setBooksTotalCount] = useState();

  const [currentBooks, setCurrentBooks] = useState([]);

  const fetchBooksByPage = async ({ indexOfFirstBook, booksPerPage }) => {
    setLoading(true);
    await fetch("/api/books/SelectBooksByPage", {
      method: "POST",
      body: JSON.stringify({
        startfrom: indexOfFirstBook,
        numperpage: booksPerPage,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentBooks(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBooksByPage({ indexOfFirstBook, booksPerPage });
    fetchBooksTotalCount();
  }, []);

  const fetchBooksTotalCount = async () => {
    setLoading(true);
    await fetch("/api/books/SelectBooksTotalCount")
      .then((res) => res.json())
      .then((data) => {
        setBooksTotalCount(data[0].total_count_books);
        //alert("total count fetchBooksCount" + data[0].count_books);
        setLoading(false);
      });
  };

  const fetchAllBooks = async () => {
    setLoading(true);
    await fetch("/api/SelectBooksCompt")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        //alert("fetchAllBooks data" + data[0].book_name);
        setLoading(false);
      });
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  //const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  console.log("total count " + booksTotalCount);
  return (
    <div className="container mt-5">
      <BooksVer2 books={currentBooks} loading={loading} />
      <PaginationVer2
        booksPerPage={booksPerPage}
        //totalBooks={books.length}
        totalBooks={booksTotalCount}
        paginate={paginate}
        currentPage={currentPage}
        fetchBooksByPage={fetchBooksByPage}
        indexOfFirstBook={indexOfFirstBook}
        loading={loading}
      />
    </div>
  );
};

export default App;
