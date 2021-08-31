import React, { useEffect, useState } from "react";
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    await fetch("/api/SelectBooksCompt")
      .then((res) => res.json())
      .then((json) => setBooks(json));
  };
  //console.log("Data1....." + data1);
  useEffect(() => {
    //see tableview3 for more info
    fetchBooks();
  }, []);

  // const [isbnnumber, setIsbnNumber] = useState(null);
  // const [bookname, setBookName] = useState(null);
  // const [authorname, setAuthorName] = useState(null);
  // const [publishername, setPublisherName] = useState(null);
  // const [categoryname, setCategoryName] = useState(null);
  // const [yearpublished, setYearPublished] = useState(null);

  const onDelete = async ({
    bookid,
    newIsbnNumber,
    newBookName,
    newAuthorName,
    newPublisherName,
    newCategoryName,
    newYearPublished,
  }) => {
    await fetch("/api/DeleteBooksCompt", {
      method: "POST",
      body: JSON.stringify({
        bookid: bookid,
        isbnnumber: newIsbnNumber,
        bookname: newBookName,
        authorname: newAuthorName,
        publishername: newPublisherName,
        categoryname: newCategoryName,
        yearpublished: newYearPublished,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // fetch the updated data
        fetchBooks();
      });
  };

  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      <div class="bg-white w-196 shadow-xl rounded p-5">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">
          Delete Books
        </h2>
        <br></br>
        <table class="border-collapse border border-green-800 ...">
          <thead>
            <tr class="border-collapse border border-green-800 ...">
              <th
                align="left"
                class="border-collapse border border-green-800 ..."
              >
                Isbn Number
              </th>
              <th
                align="left"
                class="border-collapse border border-green-800 ..."
              >
                Book Name
              </th>

              <th
                align="left"
                class="border-collapse border border-green-800 ..."
              >
                Author Name
              </th>

              <th
                align="left"
                class="border-collapse border border-green-800 ..."
              >
                Publisher Name
              </th>

              <th
                align="left"
                class="border-collapse border border-green-800 ..."
              >
                Category Name
              </th>

              <th
                align="left"
                class="border-collapse border border-green-800 ..."
              >
                Year Published
              </th>

              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.book_id}>
                {/* <td>{user.first_name}</td> */}

                <td class="border-collapse border border-green-800 ...">
                  {book.isbn_number}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {book.book_name}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {book.author_name}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {book.publisher_name}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {book.category_name}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {book.year_published}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  <React.Fragment>
                    <button
                      class="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                      style={{ marginLeft: 8 }}
                      onClick={() =>
                        onDelete({
                          bookid: book.book_id,

                          currentIsbnNumber: book.isbn_number,
                          currentBookName: book.book_name,
                          currentAuthorName: book.author_name,
                          currentPublisherName: book.publisher_name,
                          currentCategoryName: book.category_name,
                          currentYearPublished: book.year_published,
                        })
                      }
                    >
                      Delete
                    </button>
                  </React.Fragment>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
