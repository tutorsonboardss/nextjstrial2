import React from "react";

const Pagination = ({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
  loading,
}) => {
  if (loading) {
    return <span> Loading Pagination....</span>;
  }
  const pageNumbers = [];
  console.log("currentPage " + currentPage);
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div class="flex justify-center mt-12 space-x-8">
      <div class="flex space-x-8 text-red-900">
        {
          <span class="text-red-900 px-2 py-2 text-xs font-bold rounded-full">
            <span>Showing Page</span>
            <span>
              {" "}
              {currentPage} of {pageNumbers.length}
            </span>
          </span>
        }
      </div>
      <div class="flex space-x-8 "></div>
      <div class="flex space-x-8 ">
        {pageNumbers.length > 1 && currentPage > 1 ? (
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
            onClick={() => paginate(currentPage - 1)}
          >
            Prev
          </button>
        ) : (
          ""
        )}

        {pageNumbers.length > 1 && currentPage < pageNumbers.length ? (
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block "
            onClick={() => paginate(currentPage + 1)}
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

export default Pagination;