import React, { useEffect, useState } from "react";
function App() {
  const [books, setBooks] = useState([]);
  let orderName = "book_name";
  let orderType = "ASC";

  const fetchBooksByOrderNameType = async ({ orderName, orderType }) => {
    await fetch("/api/books/SelectBooksByOrderNameType", {
      method: "POST",
      body: JSON.stringify({
        ordername: orderName,
        ordertype: orderType,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
      });
  };

  useEffect(() => {
    fetchBooksByOrderNameType({ orderName, orderType });
  }, []);

  const [selectArrow, setSelectArrow] = useState(true);
  console.log("SelectArrow : " + selectArrow);

  const onSelectArrow = () => {
    setSelectArrow(!selectArrow);
    if (selectArrow === false) {
      orderType = "ASC";
      fetchBooksByOrderNameType({ orderName, orderType });
    } else {
      orderType = "DESC";
      fetchBooksByOrderNameType({ orderName, orderType });
    }
  };

  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      <div class="bg-white w-196 shadow-xl rounded p-5">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">
          List Books Asc and Desc Order
        </h2>
        <br></br>
        <table class="border-separate border border-green-800 ...">
          <thead>
            <tr class="border-collapse border border-green-800 ...">
              <th
                align="left"
                class="border-collapse border border-green-800 w-1/5"
              >
                <button
                  class=" font-bold  rounded-full"
                  onClick={() => onSelectArrow()}
                >
                  Book Name...
                  <img
                    src={selectArrow ? "/up-arrow.svg" : "/down-arrow.svg"}
                    className="h-4 ml-2 inline font-extrabold bg-gray-100 fill-current text-red-800"
                  />
                  {/* {selectArrow ? (
                    <img
                      src="/up-arrow.svg"
                      className="h-4 ml-2 inline font-extrabold bg-gray-100 fill-current text-red-800"
                    />
                  ) : (
                    <img
                      src="/down-arrow.svg"
                      className="h-4 ml-2 inline font-extrabold bg-gray-100 fill-current text-blue-800"
                    />
                  )} */}
                </button>
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
      </div>
    </div>
  );
}

export default App;
