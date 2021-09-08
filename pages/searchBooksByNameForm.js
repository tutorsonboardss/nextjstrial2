import React, { useEffect, useState, useRef } from "react";
function App() {
  const [books, setBooks] = useState([]);
  const bookNameField = useRef(null);
  const [bookname, setBookName] = useState("");

  const onSearch = async ({ searchBookName }) => {
    await fetch("/api/books/SelectBooksByName", {
      method: "POST",
      body: JSON.stringify({
        bookname: searchBookName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // fetch the updated data

        setBooks(json);
        bookNameField.current.value = "";
      });
  };

  // if (bookNameField.current === null) {
  //   console.log(" bookNameField 1 " + bookNameField.current);
  // } else {
  //   console.log("bookNameField 2 " + bookNameField.current);
  // }

  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      <div class="bg-white w-196 shadow-xl rounded p-5">
        <h2 class="text-center text-2xl font-bold text-gray-900">
          Search Books By Name
          <br />
          <br />
        </h2>
        <label for="bookname">
          <span class="font-bold"> Book Name </span>
          <input
            ref={bookNameField}
            type="text"
            id="bookname"
            name="bookname"
            autoComplete="bookname"
            class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Enter Book Name "
            required
          />
        </label>

        <button
          class="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded "
          style={{ marginLeft: 8 }}
          onClick={() =>
            onSearch(
              {
                searchBookName: bookNameField.current.value,
              },
              setBookName(bookNameField.current.value)
            )
          }
        >
          Search
        </button>

        {bookname === "" ? (
          <h3 class="text-center italic font-semibold text-gray-900">
            <br />
            You have not entered Book Name for Search
          </h3>
        ) : books.length === 0 ? (
          <h3 class="text-center italic text-1xl font-semibold text-gray-900">
            <br /> No Results Found for BookName : {bookname}
          </h3>
        ) : (
          <React.Fragment>
            <h2 class="text-center text-2xl font-bold text-gray-900">
              Search Results Found
            </h2>
            <h3 class="text-left italic font-semibold text-gray-900">
              <br />
              Search Results for BookName : {bookname}{" "}
            </h3>

            <table class="border-collapse border border-green-800 ...">
              <thead>
                <tr class="border-collapse border border-green-800 ...">
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
                    Isbn Number
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
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.book_id}>
                    {/* <td>{user.first_name}</td> */}

                    <td class="border-collapse border border-green-800 ...">
                      {book.book_name}
                    </td>

                    <td class="border-collapse border border-green-800 ...">
                      {book.isbn_number}
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
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        )}

        <br></br>
      </div>
    </div>
  );
}

export default App;
