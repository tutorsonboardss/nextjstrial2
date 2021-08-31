import React from "react";
import { useState, useRef } from "react";
import Error from "next/error";
const Addbooksform = () => {
  const [books, setbooks] = useState([]);
  const bookNameField = useRef();
  const authorNameField = useRef();
  const publisherNameField = useRef();
  const categoryNameField = useRef();
  const yearPublishedField = useRef();
  const isbnField = useRef();
  const hiddenField = useRef();

  // function validateNumber(e) {
  //   const pattern = /^[0-9]$/;

  //   return pattern.test(e.key);
  // }

  const addBook = async (event) => {
    //     if(bookNameField.current.value==="" ){
    //         alert("firsname  required");
    //         return
    //     }
    //     if(authornameField.current.value==="" ){
    //        alert("authorname  required");
    //        return
    //    }

    event.preventDefault();

    const res = await fetch("/api/InsertBookCompt", {
      body: JSON.stringify({
        bookname: event.target.bookname.value,
        authorname: event.target.authorname.value,
        publishername: event.target.publishername.value,
        categoryname: event.target.categoryname.value,
        yearpublished: event.target.yearpublished.value,
        isbnnumber: event.target.isbnnumber.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    //console.log(result[0]);
    console.log("result..." + result.message);

    if (result.message === "") {
      alert("Book added sucessfully");
      bookNameField.current.value = "";
      authorNameField.current.value = "";
      publisherNameField.current.value = "";
      categoryNameField.current.value = "";
      yearPublishedField.current.value = "";
      isbnField.current.value = "";
      hiddenField.current.value = "Book added sucessfully";
    } else {
      alert("Error : " + result.message);
    }
    // result.user => 'Sudhagar'
  };
  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      {/* start the first form  */}
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <h2 class="text-center text-3xl font-extrabold text-gray-900">
          Add Book
        </h2>

        <form class="space-y-6" onSubmit={addBook}>
          <input ref={hiddenField} type="hidden" name="remember" value="" />

          <div>
            <label for="bookname">
              <span class="font-bold"> Book Name </span>
              <input
                ref={bookNameField}
                type="text"
                id="bookname"
                name="bookname"
                autoComplete="bookname"
                class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Book Name "
                required
              />
            </label>
          </div>

          <div class="rounded shadow-sm -space-y-px">
            <div>
              <label for="authorname">
                <span class="font-bold">Author Name</span>
                <input
                  ref={authorNameField}
                  type="text"
                  id="authorname"
                  name="authorname"
                  autoComplete="authorname"
                  class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Author Name"
                  required
                />
              </label>
            </div>
          </div>

          <div class="rounded shadow-sm -space-y-px">
            <div>
              <label for="publishername">
                <span class="font-bold">Publisher Name</span>
                <input
                  ref={publisherNameField}
                  type="text"
                  id="publishername"
                  name="publishername"
                  autoComplete="publishername"
                  class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Publisher Name"
                  required
                />
              </label>
            </div>
          </div>

          <div class="rounded shadow-sm -space-y-px">
            <div>
              <label for="categoryname">
                <span class="font-bold">Category Name</span>
                <input
                  ref={categoryNameField}
                  type="text"
                  id="categoryname"
                  name="categoryname"
                  autoComplete="categoryname"
                  class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Category Name"
                  required
                />
              </label>
            </div>
          </div>

          <div>
            <label for="yearpublished">
              <span class="font-bold"> Year Published </span>
              <input
                ref={yearPublishedField}
                type="number"
                min="1900"
                max="2021"
                id="yearpublished"
                name="yearpublished"
                autoComplete="yearpublished"
                class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Year Published "
                required
              />
            </label>
          </div>

          <div>
            <label for="isbnnumber">
              <span class="font-bold"> ISBN Number</span>
              <input
                ref={isbnField}
                type="text"
                id="isbnnumber"
                name="isbnnumber"
                autoComplete="isbn"
                class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="ISBN Number "
                required
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Books
            </button>
          </div>
        </form>
      </div>
      {/* end the first form  */}
    </div>
  );
};

export default Addbooksform;
