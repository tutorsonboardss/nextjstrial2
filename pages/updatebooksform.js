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

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [isbnnumber, setIsbnNumber] = useState(null);
  const [bookname, setBookName] = useState(null);
  const [authorname, setAuthorName] = useState(null);
  const [publishername, setPublisherName] = useState(null);
  const [categoryname, setCategoryName] = useState(null);
  const [yearpublished, setYearPublished] = useState(null);

  const onEdit = ({
    bookid,
    currentIsbnNumber,
    currentBookName,
    currentAuthorName,
    currentPublisherName,
    currentCategoryName,
    currentYearPublished,
  }) => {
    setInEditMode({
      status: true,
      rowKey: bookid,
    });
    setIsbnNumber(currentIsbnNumber);
    setBookName(currentBookName);
    setAuthorName(currentAuthorName);
    setPublisherName(currentPublisherName);
    setCategoryName(currentCategoryName);
    setYearPublished(currentYearPublished);
  };

  const updateBooks = async ({
    bookid,
    newIsbnNumber,
    newBookName,
    newAuthorName,
    newPublisherName,
    newCategoryName,
    newYearPublished,
  }) => {
    await fetch("/api/UpdateBooksCompt", {
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
        // reset inEditMode and state values
        if (json.message.startsWith("ER")) {
          alert("Update Failed. Error: " + json.message);
        } else {
          alert("Update Success : " + json.message);
        }

        onCancel();

        // fetch the updated data
        fetchBooks();
      });
  };

  const onUpdate = ({
    bookid,
    newIsbnNumber,
    newBookName,
    newAuthorName,
    newPublisherName,
    newCategoryName,
    newYearPublished,
  }) => {
    console.log("OnSave..." + newIsbnNumber);
    console.log("OnSave..." + newBookName);
    updateBooks({
      bookid,
      newIsbnNumber,
      newBookName,
      newAuthorName,
      newPublisherName,
      newCategoryName,
      newYearPublished,
    });
  };

  // const onDelete = async ({ userid, newFirstName, newLastName }) => {
  //   await fetch("/api/DeleteCompt", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userid: userid,
  //       firstname: newFirstName,
  //       lastname: newLastName,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // reset inEditMode and state values
  //       onCancel();

  //       // fetch the updated data
  //       fetchUsers();
  //     });
  // };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the state value

    setIsbnNumber(null);
    setBookName(null);
    setAuthorName(null);
    setPublisherName(null);
    setCategoryName(null);
    setYearPublished(null);
  };

  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      <div class="bg-white w-196 shadow-xl rounded p-5">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">
          Update Books
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
                  {inEditMode.status && inEditMode.rowKey === book.book_id ? (
                    <input
                      size="15"
                      value={isbnnumber}
                      onChange={(event) => setIsbnNumber(event.target.value)}
                    />
                  ) : (
                    book.isbn_number
                  )}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === book.book_id ? (
                    <input
                      size="15"
                      value={bookname}
                      onChange={(event) => setBookName(event.target.value)}
                    />
                  ) : (
                    book.book_name
                  )}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === book.book_id ? (
                    <input
                      size="15"
                      value={authorname}
                      onChange={(event) => setAuthorName(event.target.value)}
                    />
                  ) : (
                    book.author_name
                  )}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === book.book_id ? (
                    <input
                      size="15"
                      value={publishername}
                      onChange={(event) => setPublisherName(event.target.value)}
                    />
                  ) : (
                    book.publisher_name
                  )}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === book.book_id ? (
                    <input
                      size="15"
                      value={categoryname}
                      onChange={(event) => setCategoryName(event.target.value)}
                    />
                  ) : (
                    book.category_name
                  )}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === book.book_id ? (
                    <input
                      size="15"
                      value={yearpublished}
                      onChange={(event) => setYearPublished(event.target.value)}
                    />
                  ) : (
                    book.year_published
                  )}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === book.book_id ? (
                    <React.Fragment>
                      <button
                        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded"
                        style={{ margin: 2 }}
                        onClick={() =>
                          onUpdate({
                            bookid: book.book_id,

                            newIsbnNumber: isbnnumber,
                            newBookName: bookname,
                            newAuthorName: authorname,
                            newPublisherName: publishername,
                            newCategoryName: categoryname,
                            newYearPublished: yearpublished,
                          })
                        }
                      >
                        Update
                      </button>

                      <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                        style={{ margin: 2 }}
                        onClick={() => onCancel()}
                      >
                        Cancel
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                        onClick={() =>
                          onEdit({
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
                        Edit
                      </button>

                      {/* <button
                        class="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                        style={{ marginLeft: 8 }}
                        onClick={() =>
                          onDelete({
                            bookid: book.book_id,
                            currentFirstName: user.first_name,
                            currentLastName: user.last_name,
                          })
                        }
                      >
                        Delete
                      </button> */}
                    </React.Fragment>
                  )}
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
