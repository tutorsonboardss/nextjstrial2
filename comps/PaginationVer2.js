import React from "react";

const PaginationVer2 = ({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
  fetchBooksByPage,

  indexOfFirstBook,
  loading,
}) => {
  if (loading) {
    return (
      <div class=" bg-white flex   justify-center mt-12">
        <div class="bg-white w-196 shadow-xl rounded p-5">
          <h2 class="text-center text-xl font-thin text-gray-900">
            Loading Pages....
          </h2>
        </div>
      </div>
    );
  }

  const pageNumbers = [];
  console.log("currentPage " + currentPage);
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div class="flex justify-center mt-12 space-x-8  w-196 shadow-xl rounded p-5">
      <div class="text-red-900">
        {
          <span class="px-2 py-2 text-xs font-bold rounded-full">
            <span>Showing Page</span>
            <span>
              {"  "}
              {currentPage} of {pageNumbers.length}
            </span>
          </span>
        }
      </div>
      <div>
        {pageNumbers.length > 1 && currentPage > 1 ? (
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
            onClick={() => {
              fetchBooksByPage({
                indexOfFirstBook: indexOfFirstBook - booksPerPage,
                booksPerPage,
              });
              paginate(currentPage - 1);
            }}
          >
            Prev
          </button>
        ) : (
          ""
        )}
      </div>
      <div>
        {pageNumbers.length > 1 && currentPage < pageNumbers.length ? (
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block "
            onClick={() => {
              paginate(currentPage + 1);
              fetchBooksByPage({
                indexOfFirstBook: indexOfFirstBook + booksPerPage,
                booksPerPage,
              });
            }}
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PaginationVer2;
