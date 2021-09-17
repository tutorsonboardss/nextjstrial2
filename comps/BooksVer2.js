import React from "react";

const BooksVer2 = ({ books, loading }) => {
  if (loading) {
    return (
      <div class=" bg-white flex   justify-center mt-12">
        <div class="bg-white w-196 shadow-xl rounded p-5">
          <h2 class="text-center text-xl font-thin text-gray-900">
            Loading books....
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div class=" bg-white flex   justify-center mt-12">
      <div class="bg-white w-196 shadow-xl rounded p-5">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">
          Show Books By Page Limit
        </h2>
        <br></br>
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
};

export default BooksVer2;
